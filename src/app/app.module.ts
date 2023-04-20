import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { FormsModule } from '@angular/forms';
import { ListaGestoresComponent } from './lista-gestores/lista-gestores.component';
import { RegistrarGestorComponent } from './registrar-gestor/registrar-gestor.component';
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
import { ListaPrestamosComponent } from './lista-prestamos/lista-prestamos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    RegistrarClienteComponent,
    ListaGestoresComponent,
    RegistrarGestorComponent,
    ActualizarClienteComponent,
    ClienteDetallesComponent,
    ActualizarGestorComponent,
    GestorDetallesComponent,
    ListaMensajesComponent,
    EnviarMensajeComponent,
    ActualizarMensajeComponent,
    MensajeDetallesComponent,
    ListaTransferenciasComponent,
    EnviarTranferenciaComponent,
    ActualizarTransferenciaComponent,
    TransferenciaDetallesComponent,
    ListaPrestamosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
