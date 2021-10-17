import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntadosComponent } from './preguntados.component';
import { PreguntadosRoutingModule } from './preguntados-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PerroRandomService } from 'src/app/servicios/perro-random.service';


@NgModule({
  declarations: [
    PreguntadosComponent
  ],
  providers:[PerroRandomService],
  imports: [
    CommonModule,
    PreguntadosRoutingModule,
    HttpClientModule
  ]
})
export class PreguntadosModule { }
