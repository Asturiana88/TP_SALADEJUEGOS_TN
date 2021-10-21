import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Puntaje } from '../clases/puntaje';
import { AuthService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class PuntajeService {

  rutaDeLaColeccion = 'puntajejuegos_';

  constructor(private bd: AngularFirestore, private authService: AuthService) {}

  CreateScore(puntos: number, juego: string): any {
    const puntaje = new Puntaje();
    const currentdate = new Date();
    const datetime = currentdate.getDate() + "/"
      + (currentdate.getMonth() + 1) + "/"
      + currentdate.getFullYear() + " @ "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes() + ":"
      + currentdate.getSeconds();

    puntaje.puntos = puntos;
    puntaje.usuario = this.authService.getUser;
    puntaje.fecha = datetime
    const collection = this.bd.collection(this.rutaDeLaColeccion+juego)
    return collection.add({...puntaje})
  }
}
