import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaPuntuacionComponent } from './tabla-puntuacion.component';


@NgModule({
  declarations: [
    TablaPuntuacionComponent
  ],
  exports: [
    TablaPuntuacionComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class TablaPuntuacionModule { }
