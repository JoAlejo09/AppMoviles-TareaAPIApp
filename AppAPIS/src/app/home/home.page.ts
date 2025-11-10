import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private router:Router, private plataform:Platform
    , private alerta:AlertController
  ) {}
  goToLogin(){
    this.router.navigate(['/login']); 
  }
  goToRegister(){
    this.router.navigate(['/register']);
  }
  salirApp(){
    if(this.plataform.is('android')){
      (navigator as any).app.exitApp();
    }
  }
}
