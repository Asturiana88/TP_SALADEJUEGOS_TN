import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from './../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ChatComponent } from './componentes/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    MenuPrincipalComponent,
    RegistroComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
