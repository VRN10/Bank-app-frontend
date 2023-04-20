import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../transferencia';
import { TransferenciaService } from '../transferencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-transferencia',
  templateUrl: './actualizar-transferencia.component.html',
  styleUrls: ['./actualizar-transferencia.component.css']
})
export class ActualizarTransferenciaComponent implements OnInit {
  
  id:number;
  transferencia:Transferencia = new Transferencia();
  
  constructor(private transferenciaServicio:TransferenciaService, private router:Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.transferenciaServicio.obtenerTransferenciaPorId(this.id).subscribe(dato => {
      this.transferencia = dato;
    }, error => console.log(error));
  }

  irALaListaDeTransferencias() {
    this.router.navigate(['/transferencias']);
  }

  onSubmit() {
    this.irALaListaDeTransferencias();
    this.transferenciaServicio.actualizarTransferencia(this.id, this.transferencia).subscribe(dato => {
      this.irALaListaDeTransferencias();
    },error => console.log(error));
  }

}
