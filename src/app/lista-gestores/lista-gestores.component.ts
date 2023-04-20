import { Component, OnInit } from '@angular/core';
import { Gestor } from '../gestor';
import { GestorService } from '../gestor.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-gestores',
  templateUrl: './lista-gestores.component.html',
  styleUrls: ['./lista-gestores.component.css']
})
export class ListaGestoresComponent implements OnInit {

  gestores:Gestor[];
  
  constructor (private gestorServicio:GestorService, private router:Router) {
    this.gestorServicio = gestorServicio;
    this.router = router;
    this.gestores = [];
  }

  ngOnInit():void {
    this.obtenerGestores();
  }

  actualizarGestor(id:number) {
    return this.router.navigate(['actualizar-gestor', id]);
  }

  private obtenerGestores() {
    this.gestorServicio.obtenerListaDeGestores().subscribe(dato => {
      this.gestores = dato;
    });
  }

  eliminarGestor(id:number) {
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al gestor",
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
        this.gestorServicio.eliminarGestor(id).subscribe(dato => {
          console.log(dato);
          this.obtenerGestores();
          swal(
            'Gestor eliminado',
            'El gestor ha sido eliminado con éxito',
            'success'
          );
        })
      }
    })
  }

  verDetallesDelGestor(id:number) {
    this.router.navigate(['gestor-detalles', id]);
  }
}

