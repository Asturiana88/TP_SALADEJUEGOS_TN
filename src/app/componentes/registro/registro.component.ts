import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email!: string;
  password!: string;
  authService?: AuthService;
  singUpError?: any;

  constructor(private auth: AuthService) {
    this.authService = auth
  }

  ngOnInit(): void {
  }

  register() {
    this.authService?.SignUp(this.email, this.password)
      .then(res => console.log(res))
      .catch((error: any) => {
        this.singUpError = error;
      })
  }


}
