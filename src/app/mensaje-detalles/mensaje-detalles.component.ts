import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../mensaje';
import { MensajeService } from '../mensaje.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-mensaje-detalles',
  templateUrl: './mensaje-detalles.component.html',
  styleUrls: ['./mensaje-detalles.component.css']
})
export class MensajeDetallesComponent implements OnInit {
  
  id:number;
  mensaje:Mensaje;
  
  constructor(private mensajeServicio:MensajeService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.mensaje =  new Mensaje();
    this.mensajeServicio.obtenerMensajePorId(this.id).subscribe(dato => {
      this.mensaje = dato;
      swal(`Detalles del mensaje ${this.mensaje.id}`)
    });
  }


}
