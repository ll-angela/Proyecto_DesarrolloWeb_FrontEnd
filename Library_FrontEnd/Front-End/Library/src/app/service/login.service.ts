import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { Observable} from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private cookies: CookieService) { } //Inyectando lo que necesito

  login(user: string, password: string): Observable<any> {
    const headers = new HttpHeaders()
    const body = JSON.stringify({})
    const params = new HttpParams()
      .set('user', user)
      .set('password', password)
    return this.http.post("http://localhost:8085/login", body, {
      params: params
    });
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token"); //Recupera el valor de la cookie
  }

  logout() {
    this.cookies.deleteAll();
  }
}
