import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../transferencia';
import { Router } from '@angular/router';
import { TransferenciaService } from '../transferencia.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-transferencias',
  templateUrl: './lista-transferencias.component.html',
  styleUrls: ['./lista-transferencias.component.css']
})
export class ListaTransferenciasComponent implements OnInit {

  transferencias:Transferencia[];

  constructor(private transferenciaServicio:TransferenciaService, private router:Router) {
    this.transferenciaServicio = transferenciaServicio;
    this.router = router;
    this.transferencias = [];
  }

  ngOnInit(): void {
    this.obtenerTransferencias();
  }

  actualizarTransferencia(id:number) {
    return this.router.navigate(['actualizar-transferencia', id]);
  }

  private obtenerTransferencias() {
    this.transferenciaServicio.obtenerListaDeTransferencias().subscribe(dato => {
      this.transferencias = dato;
    });
  }

  eliminarTransferencia(id:number) {
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la transferencia",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínala',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.transferenciaServicio.eliminarTransferencia(id).subscribe(dato => {
          console.log(dato);
          this.obtenerTransferencias();
          swal(
            'Transferencia eliminada',
            'La transferencia ha sido eliminada con éxito',
            'success'
          );
        })
      }
    })
  }

  verDetallesDeLaTransferencia(id:number) {
    this.router.navigate(['transferencia-detalles', id]);
  }

  
}
