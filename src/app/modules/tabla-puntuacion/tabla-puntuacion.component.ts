import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PuntajeService } from 'src/app/servicios/puntaje.service';

@Component({
  selector: 'app-tabla-puntuacion',
  templateUrl: './tabla-puntuacion.component.html',
  styleUrls: ['./tabla-puntuacion.component.css']
})
export class TablaPuntuacionComponent implements OnInit {
  @Input() juego!:string;
  puntajes$ !:Observable<any[]>;

  constructor(private scoreService: PuntajeService) {
  }

  ngOnInit(): void {
    console.log(this.juego)
    this.puntajes$ = this.scoreService.GetScores(this.juego)
  }
}
