import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; 


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  //Registrar usuario
  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
  //Iniciar sesion
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  //Validar si el email esta registrado
  isEmailRegistered(email: string) {
    return this.afAuth.fetchSignInMethodsForEmail(email)
      .then(methods => methods.length > 0);
  } 
  //Recuperar contraseña
  resetPasswsord(email: string) {
    return this.afAuth.sendPasswordResetEmail(email);
  }
  //Cerrar sesion
  logout() {
    return this.afAuth.signOut();
  }
  //Obtener usuario actual
  get user() {
    return this.afAuth.user;
  }  
}
