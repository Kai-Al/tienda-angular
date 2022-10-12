import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, CreateUserDTO } from '../models/user.model';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = `${environment.apiUrl}/users`;

  constructor(
    private http: HttpClient
  ) { }

  createUser(dto: CreateUserDTO) {
    return this.http.post<User> (this.apiUrl, dto);
  }

  getAllUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }
}
