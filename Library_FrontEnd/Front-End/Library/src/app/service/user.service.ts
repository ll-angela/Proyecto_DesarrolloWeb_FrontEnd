import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../user/user";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
              private loginService: LoginService) { }

  searchAllUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8084/user/userlist");
  }

  createUser(name: string, last_name: string, birth_date: string, position: string, active: boolean, username: string, password: string): Observable<User> {
    const user = {"name": name, "last_name": last_name, "birth_date": birth_date, "position": position, "active": active, "username": username, "password": password};
    return this.http.post<User>("http://localhost:8084/user/createuser", user);
  }

  updateUser(id: number, name: string, last_name: string, birth_date: string, position: string, active: boolean, username: string, password: string): Observable<User> {
    const user = {"id": id, "name": name, "last_name": last_name, "birth_date": birth_date, "position": position, "active": active, "username": username, "password": password};
    return this.http.put<User>("http://localhost:8084/user/updateuser", user);
  }

  inactivateUser(id: number, name: string, last_name: string, birth_date: string, position: string, active: boolean, username: string, password: string): Observable<User> {
    let token = this.loginService.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token
    });
    const requestOptions = { headers: headers};
    const user = {"id": id, "name": name, "last_name": last_name, "birth_date": birth_date, "position": position, "active": active, "username": username, "password": password};
    return this.http.put<User>("http://localhost:8084/user/inactivate/"+user.id, requestOptions);
  }
}
