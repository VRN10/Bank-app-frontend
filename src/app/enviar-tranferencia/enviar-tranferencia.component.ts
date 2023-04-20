import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../transferencia';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { TransferenciaService } from '../transferencia.service';

@Component({
  selector: 'app-enviar-tranferencia',
  templateUrl: './enviar-tranferencia.component.html',
  styleUrls: ['./enviar-tranferencia.component.css']
})
export class EnviarTranferenciaComponent implements OnInit {

  transferencia:Transferencia = new Transferencia();
  
  constructor(private transferenciaServicio:TransferenciaService, private router:Router) {}

  ngOnInit(): void {}

  async guardarTransferencia() {
    try {
      const dato = await firstValueFrom(this.transferenciaServicio.enviarTransferencia(this.transferencia))
      console.log(dato);
      this.irALaListaDeTransferencias();
    } catch (error) {
      console.log(error);
    }
  }

  irALaListaDeTransferencias() {
    this.router.navigate(['/transferencias']);
  }

  onSubmit() {
    this.guardarTransferencia();
  }


}
