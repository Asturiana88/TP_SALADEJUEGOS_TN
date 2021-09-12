import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authService: AuthService
  constructor(private auth: AuthService) {
    this.authService = auth;
  }

  ngOnInit(): void {
  }

}
