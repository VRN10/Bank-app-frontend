import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from './mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private baseURL = "http://localhost:8080/bankapp/v3/mensajes";

  constructor(private httpClient:HttpClient) { }

  obtenerListaDeMensajes() : Observable<Mensaje[]> {
    return this.httpClient.get<Mensaje[]>(`${this.baseURL}`);
  }

  enviarMensaje(mensaje:Mensaje) : Observable<Object> {
    return this.httpClient.post<Mensaje[]>(`${this.baseURL}`, mensaje);
  }

  obtenerMensajePorId(id:number) : Observable<Mensaje> {
    return this.httpClient.get<Mensaje>(`${this.baseURL}/${id}`);
  }

  actualizarMensaje(id:number, mensaje:Mensaje) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, mensaje);
  }

  eliminarMensaje(id:number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
