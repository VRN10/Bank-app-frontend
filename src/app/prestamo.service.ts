import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prestamo } from './prestamo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  private baseURL = "http://localhost:8080/bankapp/v4/prestamos"

  constructor(private httpClient:HttpClient) { }

  obtenerListaDePrestamos() : Observable<Prestamo[]> {
    return this.httpClient.get<Prestamo[]>(`${this.baseURL}`);
  }

  enviarPrestamo(prestamo:Prestamo) : Observable<Object> {
    return this.httpClient.post<Prestamo[]>(`${this.baseURL}`, prestamo);
  }

  obtenerPrestamoPorId(id:number) : Observable<Prestamo> {
    return this.httpClient.get<Prestamo>(`${this.baseURL}/${id}`);
  }

  actualizarPrestamo(id:number, prestamo:Prestamo) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, prestamo);
  }

  eliminarPrestamo(id:number) : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
