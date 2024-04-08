import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users: User[] = [];

  constructor(private http: HttpClient) {}  

  login(email: string, password: string) {

    return this.http.post<{token: string}>(environment.apiUrl + 'api/Utilisateur/login', { email, password });    
  }

  add(user: User) {
  return this.http.post<User>(environment.apiUrl + 'api/Utilisateur', user);
}
}
