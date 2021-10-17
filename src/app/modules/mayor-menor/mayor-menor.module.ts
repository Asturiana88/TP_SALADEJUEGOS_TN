import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorMenorComponent } from './mayor-menor.component';
import { MayorMenorRoutingModule } from './mayor-menor-routing.module';



@NgModule({
  declarations: [
    MayorMenorComponent
  ],
  imports: [
    CommonModule,
    MayorMenorRoutingModule
  ]
})
export class MayorMenorModule { }
