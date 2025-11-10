import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeoService {
  private apiUrl = 'https://geodb-free-service.wirefreethought.com/v1/geo/cities';
  

  constructor(private http: HttpClient) {}

  buscarCiudad(nombre: string, limite: number = 5): Observable<any> {
    const url = `${this.apiUrl}?limit=${limite}&namePrefix=${nombre}`;
    return this.http.get(url);
  }
}
