import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CanActivateService } from './servicios/can-activate.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quiensoy', component: QuienSoyComponent, canActivate:[CanActivateService] },
  { path: 'registrarse', component: RegistroComponent },
  { path: 'ahorcado', loadChildren: () => import("./modules/ahorcado/ahorcado.module").then(md => md.AhorcadoModule), canActivate:[CanActivateService] },
  { path: 'mayor-menor', loadChildren: () => import("./modules/mayor-menor/mayor-menor.module").then(md => md.MayorMenorModule), canActivate:[CanActivateService] },
  { path: 'preguntados', loadChildren: () => import("./modules/preguntados/preguntados.module").then(md => md.PreguntadosModule), canActivate:[CanActivateService] },
  { path: 'snake', loadChildren: () => import("./modules/snake/snake.module").then(md => md.SnakeModule), canActivate:[CanActivateService] },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
