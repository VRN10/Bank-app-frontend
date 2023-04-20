import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gestor } from './gestor';

@Injectable({
  providedIn: 'root'
})
export class GestorService {
  
  private baseURL = "http://localhost:8080/bankapp/v2/gestores";

  constructor(private httpClient:HttpClient) { }

  obtenerListaDeGestores():Observable<Gestor[]> {
    return this.httpClient.get<Gestor[]>(`${this.baseURL}`);
  }

  registrarGestor(gestor:Gestor) : Observable<Object> {
    return this.httpClient.post<Gestor[]>(`${this.baseURL}`, gestor);
  }

  actualizarGestor(id:number, gestor:Gestor) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, gestor);
  }

  obtenerGestorPorID(id:number) : Observable<Gestor> {
    return this.httpClient.get<Gestor>(`${this.baseURL}/${id}`);
  }

  eliminarGestor(id:number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
