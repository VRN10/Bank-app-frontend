import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { RegistrarGestorComponent } from './registrar-gestor/registrar-gestor.component';
import { ListaGestoresComponent } from './lista-gestores/lista-gestores.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { ClienteDetallesComponent } from './cliente-detalles/cliente-detalles.component';
import { ActualizarGestorComponent } from './actualizar-gestor/actualizar-gestor.component';
import { GestorDetallesComponent } from './gestor-detalles/gestor-detalles.component';
import { ListaMensajesComponent } from './lista-mensajes/lista-mensajes.component';
import { EnviarMensajeComponent } from './enviar-mensaje/enviar-mensaje.component';
import { ActualizarMensajeComponent } from './actualizar-mensaje/actualizar-mensaje.component';
import { MensajeDetallesComponent } from './mensaje-detalles/mensaje-detalles.component';
import { ListaTransferenciasComponent } from './lista-transferencias/lista-transferencias.component';
import { EnviarTranferenciaComponent } from './enviar-tranferencia/enviar-tranferencia.component';
import { ActualizarTransferenciaComponent } from './actualizar-transferencia/actualizar-transferencia.component';
import { TransferenciaDetallesComponent } from './transferencia-detalles/transferencia-detalles.component';

const routes: Routes = [
  {path : 'clientes', component:ListaClientesComponent},
  {path : '',redirectTo:'clientes',pathMatch:'full'},
  {path : 'registrar-cliente', component:RegistrarClienteComponent},
  {path : 'actualizar-cliente/:id', component:ActualizarClienteComponent},
  {path : 'cliente-detalles/:id', component:ClienteDetallesComponent},
  {path : 'gestores', component:ListaGestoresComponent},
  {path : 'registrar-gestor', component:RegistrarGestorComponent},
  {path : 'actualizar-gestor/:id', component:ActualizarGestorComponent},
  {path : 'gestor-detalles/:id', component:GestorDetallesComponent},
  {path : 'mensajes', component:ListaMensajesComponent},
  {path : 'enviar-mensaje', component:EnviarMensajeComponent},
  {path : 'actualizar-mensaje/:id', component:ActualizarMensajeComponent},
  {path : 'mensaje-detalles/:id', component:MensajeDetallesComponent},
  {path : 'transferencias', component:ListaTransferenciasComponent},
  {path : 'enviar-transferencia', component:EnviarTranferenciaComponent},
  {path : 'actualizar-transferencia/:id', component:ActualizarTransferenciaComponent},
  {path : 'transferencia-detalles/:id', component:TransferenciaDetallesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
