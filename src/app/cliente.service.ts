import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL = "http://localhost:8080/bankapp/v1/clientes";

  constructor(private httpClient:HttpClient) { }

  obtenerListaDeClientes() : Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
  }

  registrarCliente(cliente:Cliente) : Observable<Object> {
    return this.httpClient.post<Cliente[]>(`${this.baseURL}`, cliente);
  }

  actualizarCliente(id: number, cliente: Cliente): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, cliente);
  }

  obtenerClientePorId(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`);
  }

  eliminarCliente(id:number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
