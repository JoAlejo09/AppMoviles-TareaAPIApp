import { Component} from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/core/auth';
import { Router } from '@angular/router';

@Component({ 
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
  email = '';
  password = '';

  constructor( private auth: AuthService, private toast:ToastController, private router:Router) { }

  async login() {
    try {
      if (!this.email || !this.password) {
        this.showToast('Por favor ingrese correo y contraseña.');
        return;
      }
      if (this.password.length < 6) {
        this.showToast('La contraseña debe tener al menos 6 caracteres.');
        return;
      }
      if (!this.email.includes('@')) {
        this.showToast('Por favor ingrese un correo electrónico válido.');
        return;
      }
      if(!this.auth.isEmailRegistered(this.email)){
        this.showToast('El correo electrónico no está registrado.');
        return;
      }
      await this.auth.login(this.email, this.password);
      this.router.navigate(['/menu']);
      this.showToast('Inicio de sesión exitoso');
    } catch (error) {
      this.showToast('Error al iniciar sesión: ' + error);
    }
  }

  async resetPassword() {
    if (!this.email) {
      this.showToast('Por favor ingrese su correo electrónico para restablecer la contraseña.');
      return;
    }
    try {
      await this.auth.resetPasswsord(this.email);
      this.showToast('Correo de restablecimiento de contraseña enviado.');
    } catch (error) {
      this.showToast('Error al enviar el correo de restablecimiento: ' + error);
    }
  }
  goToRegister(){
    this.router.navigate(['/register']);
  }

  async showToast(message: string) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
  goToHome(){
    this.router.navigate(['/home']);
  }

}
