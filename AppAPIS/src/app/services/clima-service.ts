import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
private baseUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  obtenerClima (lat: number, lon: number, hourlyVars: string[], dailyVars: string[]): Observable<any> {
    const hourly = hourlyVars.join(',');
    const daily = dailyVars.join(',');

    const url = `${this.baseUrl}?latitude=${lat}&longitude=${lon}` +
      `${hourly ? `&hourly=${hourly}` : ''}` +
      `${daily ? `&daily=${daily}` : ''}` +
      `&timezone=auto`;

    return this.http.get<any>(url);
  }
}