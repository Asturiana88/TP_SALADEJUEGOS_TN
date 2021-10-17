import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PerroRandomService } from 'src/app/servicios/perro-random.service';
import {  take} from "rxjs/operators";


@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  opciones = new BehaviorSubject<any[]>([])
  pregunta!: any;
  resultado?: string;

  constructor(private dogBreedService: PerroRandomService) {
    this.getOpciones()
  }

  siguiente(){
    this.resultado=""
    this.opciones = new BehaviorSubject<any[]>([])
    this.getOpciones()
  }

  async getOpciones(){
    this.opciones.pipe(
      take(1)
    ).subscribe(async (opciones) => {
      if (opciones.length >= 3) {
        this.pregunta = opciones[Math.floor(Math.random()*opciones.length)]
        console.log(this.pregunta)
        return;
      };
      const data : any = await this.dogBreedService.getRandom().toPromise()
      if (data) {
        const breed = data[0].breeds[0]
        if (breed){
          this.opciones.next([...opciones, {url: data[0].url, raza:breed.name}])
        }
      }
      this.getOpciones();
    })
  }

  ngOnInit(): void {
  }

  shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  adivinar(raza:string){
    if (this.resultado) return;
    if (this.pregunta.raza == raza) {
      this.resultado = `Ganaste la raza era ${raza}`
    } else {
      this.resultado = `Perdiste, la raza era ${this.pregunta.raza}`
    }
  }
}
