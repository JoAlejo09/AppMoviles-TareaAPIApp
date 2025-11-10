import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController} from '@ionic/angular';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage {
  //Variables para el registro
  email = '';
  password = '';
  //Constructor con inyeccion de dependencias
  constructor(private auth:AuthService, private toast:ToastController, private router:Router) { }

  //Metodo para registrar un nuevo usuario
  async register(){
    try {
      await this.auth.register(this.email, this.password);
      this.router.navigate(['/home']);
      this.showToast('Registro exitoso');      
    } catch (error) {
      this.showToast('Error al registrar: ');      
    }
  }
  //Metodo para mostrar mensajes toast
   async showToast(message: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }
  goToHome(){
    this.router.navigate(['/home']);
  }
}
