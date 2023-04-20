import { Component, OnInit } from '@angular/core';
import { Gestor } from '../gestor';
import { Router } from '@angular/router';
import { GestorService } from '../gestor.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-registrar-gestor',
  templateUrl: './registrar-gestor.component.html',
  styleUrls: ['./registrar-gestor.component.css']
})
export class RegistrarGestorComponent implements OnInit {

  gestor : Gestor = new Gestor();
  
  constructor(private gestorServicio:GestorService, private router:Router) {}

  ngOnInit(): void{ }

  
  async guardarGestor() {
    try {
      const dato = await firstValueFrom(this.gestorServicio.registrarGestor(this.gestor));
      console.log(dato);
      this.irALaListaDeGestores();
    } catch (error) {
      console.log(error);
    }
  }

  irALaListaDeGestores(){
    this.router.navigate(['/gestores']);
  }

  onSubmit() {
    this.guardarGestor();
  }
}
