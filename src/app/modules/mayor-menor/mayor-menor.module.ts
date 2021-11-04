import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorMenorComponent } from './mayor-menor.component';
import { MayorMenorRoutingModule } from './mayor-menor-routing.module';
import { FormModule } from '../form/form.module';
import { TablaPuntuacionModule } from '../tabla-puntuacion/tabla-puntuacion.module';



@NgModule({
  declarations: [
    MayorMenorComponent,
  ],
  imports: [
    FormModule,
    CommonModule,
    MayorMenorRoutingModule,
    TablaPuntuacionModule
  ]
})
export class MayorMenorModule { }
