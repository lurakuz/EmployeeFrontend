import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SigninDto } from '../../model/authentication/signin.model';
import { SignupDto } from '../../model/authentication/signup.model';
import { UserDto } from '../../model/user.model';
import {
  SIGNIN_URL, SIGNUP_URL, CURRENT_USER_URL, ACCESS_TOKEN,
  LOGOUT_URL, FORGOT_PASSWORD_URL, RESET_PASSWORD_URL
} from '../../constants';
import { TokenStorageService } from './token/token-storage.service';
import { JwtResponse } from 'src/app/model/authentication/jwt-response.model';
import { Router } from '@angular/router';

let headers = new HttpHeaders({
  'accept': '*/*',
  'Access-Control-Allow-Origin': '*'
});

@Injectable({
  providedIn: 'root'
})
export class CustomAuthService {


  constructor(private http: HttpClient, private tokenStorage: TokenStorageService,
    private router: Router) {
  }

  signUp(signupDto: SignupDto): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(SIGNUP_URL, signupDto, {headers})
  }

  signIn(signinDto: SigninDto): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(SIGNIN_URL, signinDto, {headers})
  }

  getCurrentUser(): Observable<UserDto> {
    return this.http.get<UserDto>(CURRENT_USER_URL);
  }

  checkLoggedUser(): boolean {
    if (this.tokenStorage.getToken() == null) {
      return false;
    } else {
      return true;
    }
  }

  logout(): void {
    this.http.get("http://localhost:8080/auth/logout", {headers}).subscribe(() => {
      this.tokenStorage.signOut();
      if (!this.checkLoggedUser) {
        console.log("logout successed");
        this.router.navigate(['login']);
      } else {
        console.log("logout failed");
      }
    });
  }
}