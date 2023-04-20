import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ActivatedRoute, Route } from '@angular/router';
import { ClienteService } from '../cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-detalles',
  templateUrl: './cliente-detalles.component.html',
  styleUrls: ['./cliente-detalles.component.css']
})
export class ClienteDetallesComponent implements OnInit {
  
  id:number;
  cliente:Cliente;

  constructor(private route:ActivatedRoute, private clienteServicio:ClienteService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cliente = new Cliente();
    this.clienteServicio.obtenerClientePorId(this.id).subscribe(dato => {
      this.cliente = dato;
      swal(`Detalles del cliente ${this.cliente.usuario}`);
    });
  }

}
