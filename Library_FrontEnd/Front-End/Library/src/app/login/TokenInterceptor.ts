import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { LoginService } from "../service/login.service";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: LoginService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    if (request.headers.get("skip")) {
      request = request.clone({
        headers: request.headers.delete('skip')
      });
      return next.handle(request);
    }

    const token = this.auth.getToken();

    const request1 = request.clone({
      headers: request.headers.set('Authorization', 'Bearer '+token),
    });

    return next.handle(request1);
  }
}
