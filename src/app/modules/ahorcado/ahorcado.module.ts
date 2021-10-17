import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AhorcadoComponent } from './ahorcado.component';
import { AhorcadoRoutingModule } from './ahorcado-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AhorcadoComponent
  ],
  imports: [
    AhorcadoRoutingModule,
    CommonModule,
    HttpClientModule
  ]
})
export class AhorcadoModule { }
