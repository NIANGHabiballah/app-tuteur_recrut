import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(this.baseUrl + '/login', credentials, { withCredentials: true });
  }

  register(user: { username: string, email: string, password: string, role: string }): Observable<any> {
    return this.http.post(this.baseUrl + '/register', {
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role
    }, { withCredentials: true });
  }
}