import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Form } from '../clases/form';
import { AuthService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  rutaDeLaColeccion = 'formjuegos_';

  constructor(private bd: AngularFirestore, private authService: AuthService) {}

  SubmitForm(form: Form, juego: string): any {
    const collection = this.bd.collection(this.rutaDeLaColeccion+juego)
    return collection.add({...form})
  }
}
