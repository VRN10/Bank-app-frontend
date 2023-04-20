import { Component, OnInit } from '@angular/core';
import { Prestamo } from '../prestamo';
import { PrestamoService } from '../prestamo.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-prestamos',
  templateUrl: './lista-prestamos.component.html',
  styleUrls: ['./lista-prestamos.component.css']
})
export class ListaPrestamosComponent implements OnInit {

  prestamos: Prestamo[];

  constructor(private prestamoServicio: PrestamoService, private router: Router) {
    this.prestamoServicio = prestamoServicio;
    this.router = router;
    this.prestamos = [];
  }

  ngOnInit(): void {
    this.obtenerPrestamos();
  }

  actualizarPrestamo(id: number) {
    return this.router.navigate(['actualizar-prestamo', id]);
  }

  private obtenerPrestamos() {
    this.prestamoServicio.obtenerListaDePrestamos().subscribe(dato => {
      this.prestamos = dato;
    });
  }

  eliminarPrestamo(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el préstamo",
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
        this.prestamoServicio.eliminarPrestamo(id).subscribe(dato => {
          console.log(dato);
          this.obtenerPrestamos();
          swal(
            'Préstamo eliminado',
            'El préstamo ha sido eliminado con éxito',
            'success'
          );
        })
      }
    })
  }

  verDetallesDelPrestamo(id: number) {
    this.router.navigate(['prestamo-detalles', id]);
  }

}
