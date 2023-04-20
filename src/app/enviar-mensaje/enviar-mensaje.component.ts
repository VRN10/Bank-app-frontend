import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../mensaje';
import { MensajeService } from '../mensaje.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-enviar-mensaje',
  templateUrl: './enviar-mensaje.component.html',
  styleUrls: ['./enviar-mensaje.component.css']
})
export class EnviarMensajeComponent implements OnInit {

  mensaje: Mensaje = new Mensaje();

  constructor(private mensajeServicio:MensajeService, private router:Router) {}

  ngOnInit(): void {}

  async guardarMensaje() {
    try {
      const dato = await firstValueFrom(this.mensajeServicio.enviarMensaje(this.mensaje))
      console.log(dato);
      this.irALaListaDeMensajes();
    } catch (error) {
      console.log(error);
    }
  }

  irALaListaDeMensajes() {
    this.router.navigate(['/mensajes']);
  }

  onSubmit() {
    this.guardarMensaje();
  }

}
