import { Component, OnInit } from '@angular/core';
import { Gestor } from '../gestor';
import { GestorService } from '../gestor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-gestor',
  templateUrl: './actualizar-gestor.component.html',
  styleUrls: ['./actualizar-gestor.component.css']
})

export class ActualizarGestorComponent implements OnInit{
  
  id:number
  gestor:Gestor = new Gestor();

  constructor (private gestorServicio:GestorService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.gestorServicio.obtenerGestorPorID(this.id).subscribe(dato => {
      this.gestor = dato;
    },error => console.log(error));
  }

  irALaListaDeGestores(){
    this.router.navigate(['/gestores']);
  }

  onSubmit() {
    this.irALaListaDeGestores();
    this.gestorServicio.actualizarGestor(this.id, this.gestor).subscribe(dato => {
      this.irALaListaDeGestores();
    },error => console.log(error));
  }

}
