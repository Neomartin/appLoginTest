import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const URL = environment.URL;
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(
    private http: HttpClient
  ) { }

  login(body: any) {
    // console.log('servicio llamado', body);
  
    return this.http.post(`${URL}/login`, body, { headers: this.headers });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  }

}
