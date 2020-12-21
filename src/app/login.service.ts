import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginDto} from './login/login-dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  addUser(user: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/auth/signup', user);
  }
  login(login: LoginDto): Observable<any> {
    return this.httpClient.post<any>(`http://localhost:8080/auth/signin`, login);
  }
}
