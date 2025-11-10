import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima-service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clima-api',
  templateUrl: './clima-api.page.html',
  styleUrls: ['./clima-api.page.scss'],
  standalone: false,
})
export class ClimaApiPage {
  //latitud y longitud de ejemplo Quito ecuador
  lat!: number;
  lon!: number;
  climaData: any = null;
  hourlyOptions = [
    { label: 'Temperatura', value: 'temperature_2m', checked: false },
    { label: 'Humedad', value: 'relative_humidity_2m', checked: false },
    { label: 'Precipitación', value: 'precipitation', checked: false },
  ];
   dailyOptions = [
    { label: 'Temperatura Máx', value: 'temperature_2m_max', checked: false },
    { label: 'Temperatura Mín', value: 'temperature_2m_min', checked: false },
    { label: 'Precipitación Total', value: 'precipitation_sum', checked: false },
  ];

  constructor(private clima: ClimaService, private toast:ToastController,
    private router:Router
  ) { }

obtenerDatos() {
    const hourlyVars = this.hourlyOptions.filter(o => o.checked).map(o => o.value);
    const dailyVars = this.dailyOptions.filter(o => o.checked).map(o => o.value);

    if (!this.lat || !this.lon) {
      this.mostrarToast('Por favor ingresa latitud y longitud');
      return;
    }

    this.clima.obtenerClima(this.lat, this.lon, hourlyVars, dailyVars).subscribe({
      next: (data) => {
        this.climaData = data;
        this.mostrarToast('Datos obtenidos correctamente');
      },
      error: () => this.mostrarToast('Error al obtener datos del clima'),
    });
  }
  async mostrarToast(message: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
      color: 'dark',
      position: 'bottom'
    });
    toast.present(); 
  }
  
  volverAlMenu() {
    this.router.navigate(['/menu']);
  }
}
