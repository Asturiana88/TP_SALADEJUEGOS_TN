import { Component, OnInit } from '@angular/core';
import { Mensaje } from 'src/app/clases/mensaje';
import { AuthService } from 'src/app/servicios/autenticacion.service';
import { ChatService } from 'src/app/servicios/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chatService: ChatService;
  authService: AuthService;
  mensaje!: string;
  mensajes: any = [];

  constructor(private chat: ChatService, private auth: AuthService) {
    this.chatService = chat;
    this.authService = auth;
    this.mensajes = chat.GetMensajes().subscribe((data: any) => this.mensajes = data);
  }

  enviarMensaje() {
    if (!this.mensaje) return
    const usuario = this.authService.getUser;
    const now = new Date;
    const mensaje = { usuario, hora: now.toLocaleString(), mensaje: this.mensaje }
    this.chatService.CreateMensaje(mensaje);
    this.mensaje = '';
  }

  ngOnInit(): void {
  }

}