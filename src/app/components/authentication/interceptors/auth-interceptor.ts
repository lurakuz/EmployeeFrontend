import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenStorageService } from "../token/token-storage.service";
import { API_BASE_URL,  } from '../../../constants';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.token.getToken();
    console.log("token =" + token);
    if (token != null) {
      if (!token.startsWith('Bearer')) {
        req = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
      } else {
        req = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
      }
    }
    req = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', API_BASE_URL) });
    return next.handle(req);
  }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ];