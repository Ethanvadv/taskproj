import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userURl = environment.apiUrl

  constructor(private http : HttpClient) { }

  getUserDetails(): Observable<any> {
    return this.http.get(this.userURl + 'api/utilisateur')
  }
}
