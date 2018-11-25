import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Set } from './set';


const apiUrl = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class SetService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(`${apiUrl}gset/`);
  }

  get(id: string): Observable<any> {
    return this.http.get(`${apiUrl}gset/${id}`);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${apiUrl}gset/${id}`);
  }

  post(data: Set): Observable<any> {
    const body = { ...data };
    return this.http.post(`${apiUrl}gset/`, body);
  }

  patch(data: Set): Observable<any> {
    const body = { ...data };
    return this.http.patch(`${apiUrl}gset/${body.id}/`, body);
  }
}
