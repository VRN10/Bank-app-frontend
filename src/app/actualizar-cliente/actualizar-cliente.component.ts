import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit{
  
  id:number
  cliente : Cliente = new Cliente();
  
  constructor (private clienteServicio:ClienteService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteServicio.obtenerClientePorId(this.id).subscribe(dato => {
      this.cliente = dato;
    },error => console.log(error));
  }

  irALaListaDeClientes(){
    this.router.navigate(['/clientes']);
  }

  onSubmit() {
    this.irALaListaDeClientes();
    this.clienteServicio.actualizarCliente(this.id,this.cliente).subscribe(dato => {
      this.irALaListaDeClientes();
    },error => console.log(error));
  }
}


