import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../mensaje';
import { MensajeService } from '../mensaje.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-mensaje',
  templateUrl: './actualizar-mensaje.component.html',
  styleUrls: ['./actualizar-mensaje.component.css']
})
export class ActualizarMensajeComponent implements OnInit {
  
  id:number;
  mensaje:Mensaje = new Mensaje();
  
  constructor(private mensajeServicio:MensajeService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.mensajeServicio.obtenerMensajePorId(this.id).subscribe(dato => {
      this.mensaje = dato;
    }, error => console.log(error));
  }

  irALaListaDeMensajes() {
    this.router.navigate(['/mensajes']);
  }

  onSubmit() {
    this.irALaListaDeMensajes();
    this.mensajeServicio.actualizarMensaje(this.id, this.mensaje).subscribe(dato => {
      this.irALaListaDeMensajes();
    },error => console.log(error));
  }

}
