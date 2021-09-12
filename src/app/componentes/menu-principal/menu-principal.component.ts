import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  authService: AuthService;

  constructor(private auth: AuthService) {
    this.authService = auth
  }

  ngOnInit(): void {
  }

}
