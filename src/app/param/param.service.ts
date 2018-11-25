import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Set } from '../set/set';
import { Param } from './param';

const apiUrl = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class ParamService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(`${apiUrl}param/`);
  }

  get(id: string): Observable<any> {
    return this.http.get(`${apiUrl}param/${id}`);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${apiUrl}param/${id}`);
  }

  post(data: Param): Observable<any> {
    const body = { ...data };
    return this.http.post(`${apiUrl}param/`, body);
  }

  patch(data: Param): Observable<any> {
    const body = { ...data };
    return this.http.patch(`${apiUrl}param/${body.id}/`, body);
  }
}
