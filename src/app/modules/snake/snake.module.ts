import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnakeRoutingModule } from './snake-routing.module';
import { SnakeComponent } from './snake.component';
import { FormModule } from '../form/form.module';
import { TablaPuntuacionModule } from '../tabla-puntuacion/tabla-puntuacion.module';


@NgModule({
  declarations: [
    SnakeComponent
  ],
  imports: [
    CommonModule,
    SnakeRoutingModule,
    FormModule,
    TablaPuntuacionModule
  ]
})
export class SnakeModule { }
