import { Component } from '@angular/core';
import { GeoService } from 'src/app/services/geo-service';
import { ClimaService } from 'src/app/services/clima-service';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.page.html',
  styleUrls: ['./ciudades.page.scss'],
  standalone: false,
})
export class CiudadesPage {
 termino = '';
  ciudades: any[] = [];
  climaActual: any = null;
  ciudadSeleccionada: string = '';

  constructor(private geoService: GeoService, private weatherService: ClimaService) {}

  buscar() {
    if (!this.termino.trim()) return;
    this.climaActual = null;

    this.geoService.buscarCiudad(this.termino).subscribe({
      next: (data) => {
        this.ciudades = data.data;
      },
      error: (err) => console.error('Error al buscar ciudad', err)
    });
  }

  seleccionarCiudad(ciudad: any) {
    this.ciudadSeleccionada = ciudad.city;
    this.ciudades = []; // limpiar lista

    this.weatherService.obtenerClima(ciudad.latitude, ciudad.longitude).subscribe({
      next: (data) => {
        this.climaActual = data.current;
      },
      error: (err) => console.error('Error al obtener clima', err)
    });
  }
}
