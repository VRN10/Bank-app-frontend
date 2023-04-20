import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../transferencia';
import { TransferenciaService } from '../transferencia.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-transferencia-detalles',
  templateUrl: './transferencia-detalles.component.html',
  styleUrls: ['./transferencia-detalles.component.css']
})
export class TransferenciaDetallesComponent implements OnInit {

  id:number;
  transferencia:Transferencia;
  
  constructor(private transferenciaServicio:TransferenciaService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.transferencia =  new Transferencia();
    this.transferenciaServicio.obtenerTransferenciaPorId(this.id).subscribe(dato => {
      this.transferencia = dato;
      swal(`Detalles de la tranferencia ${this.transferencia.id}`)
    });
  }

}
