import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../mensaje';
import { MensajeService } from '../mensaje.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-mensajes',
  templateUrl: './lista-mensajes.component.html',
  styleUrls: ['./lista-mensajes.component.css']
})
export class ListaMensajesComponent implements OnInit {

  mensajes:Mensaje[];

  constructor(private mensajeServicio:MensajeService, private router:Router) {
    this.mensajeServicio = mensajeServicio;
    this.router = router;
    this.mensajes = [];
  }

  ngOnInit(): void {
    this.obtenerMensajes();
  }

  actualizarMensaje(id:number) {
    return this.router.navigate(['actualizar-mensaje', id]);
  }

  private obtenerMensajes() {
    this.mensajeServicio.obtenerListaDeMensajes().subscribe(dato => {
      this.mensajes = dato;
    });
  }

  eliminarMensaje(id:number) {
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el mensaje",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.mensajeServicio.eliminarMensaje(id).subscribe(dato => {
          console.log(dato);
          this.obtenerMensajes();
          swal(
            'Mensaje eliminado',
            'El mensaje ha sido eliminado con éxito',
            'success'
          );
        })
      }
    })
  }

  verDetallesDelMensaje(id:number) {
    this.router.navigate(['mensaje-detalles', id]);
  }

  
}
