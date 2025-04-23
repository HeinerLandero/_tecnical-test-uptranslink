import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {
  private apiUrl = 'http://localhost:8000/api/pqrs';

  constructor(private http: HttpClient) { }

  getPqrs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPqrsByEmail(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/cliente/${email}`);
  }

  createPqrs(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updatePqrs(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
}
