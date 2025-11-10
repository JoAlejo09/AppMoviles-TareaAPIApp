import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: false,
})
export class MenuPage{
  apis = [
    {nombre: 'Dog API 🐶', route: '/dog-api', img:'/assets/dog-api.png'},
    {nombre: 'Clima API ☁️', route: '/clima-api', img:'/assets/clima-api.png'},
  ]

  constructor(private router:Router, private auth:AuthService) { }

  //Para cerrar sesión y redirigir a home
  async cerrarSesion() {
    try {
      await this.auth.logout();
      this.showToast('Sesión cerrada con éxito');
      this.router.navigate(['/home']);      
    } catch (error) {
      this.showToast('Error al cerrar sesión');
      console.error('Error al cerrar sesión:', error);      
    }

  }
  //Para mostrar mensaje por ToastController
  async showToast(message: string) {
    const toast = document.createElement('ion-toast');
    toast.message = message;
    toast.duration = 2000;
    toast.color = 'dark';
    toast.position = 'bottom';
    document.body.appendChild(toast);
    return toast.present();
  }
  irAapi(route:string){
    this.router.navigate([route]);
  }

}
