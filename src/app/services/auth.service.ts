import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(data: any): Observable<any> {
    return this.http.post(
      environment.apiBaseUrl + 'api/v1/authentication/register',
      data
    );
  }

  loginUser(data: any): Observable<any> {
    return this.http.post(
      environment.apiBaseUrl + 'api/v1/authentication/login',
      data
    );
  }

  logoutUser(): Observable<any> {
    let user = JSON.parse(localStorage.getItem('user')!);

    return this.http.post(
      environment.apiBaseUrl + 'api/v1/authentication/logout',
      {
        headers: { Authorization: user.accessToken },
      }
    );
  }
}
