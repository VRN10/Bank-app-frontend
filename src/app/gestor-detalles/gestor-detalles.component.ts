import { Component, OnInit } from '@angular/core';
import { Gestor } from '../gestor';
import { ActivatedRoute } from '@angular/router';
import { GestorService } from '../gestor.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-gestor-detalles',
  templateUrl: './gestor-detalles.component.html',
  styleUrls: ['./gestor-detalles.component.css']
})
export class GestorDetallesComponent implements OnInit {
 
  id:number;
  gestor:Gestor;

  constructor (private route:ActivatedRoute, private gestorServicio:GestorService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.gestor =  new Gestor();
    this.gestorServicio.obtenerGestorPorID(this.id).subscribe(dato => {
      this.gestor = dato;
      swal(`Detalles del Gestor ${this.gestor.usuario}`)
    });
  }

}
