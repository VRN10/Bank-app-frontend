import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from './transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private baseURL = "http://localhost:8080/bankapp/v5/transferencias"

  constructor(private httpClient:HttpClient) { }

  obtenerListaDeTransferencias() : Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(`${this.baseURL}`);
  }

  enviarTransferencia(transferencia:Transferencia) : Observable<Object> {
    return this.httpClient.post<Transferencia[]>(`${this.baseURL}`, transferencia);
  }

  obtenerTransferenciaPorId(id:number) : Observable<Transferencia> {
    return this.httpClient.get<Transferencia>(`${this.baseURL}/${id}`);
  }

  actualizarTransferencia(id:number, transferencia:Transferencia) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, transferencia);
  }

  eliminarTransferencia(id:number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
