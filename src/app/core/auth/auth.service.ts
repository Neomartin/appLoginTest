import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token = 'Some token';
  private URL = environment.URL;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  tokenValidate(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${this.URL}/token`, { headers: this.headers.append('Authorization', token) }).pipe(
      map(() => {
        return true;
      }),
      // of arma un observable para devolver a mi componente subscripto
      catchError((error) => {
        console.log('Errorsito', error);
        
        return of(false);
      })
    );
  }
}
