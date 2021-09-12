import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;
  authService!: AuthService;

  constructor(private auth: AuthService) {
    this.authService = auth
  }

  ngOnInit(): void {
  }

  accesoRapido() {
    this.password = "test@test.com";
    this.email = "test@test.com";
  }

  loggedIn() {
    this.authService?.SignIn(this.email, this.password)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

}
