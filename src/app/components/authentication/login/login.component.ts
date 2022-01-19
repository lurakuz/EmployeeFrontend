import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtResponse } from 'src/app/model/authentication/jwt-response.model';
import { SigninDto } from 'src/app/model/authentication/signin.model';
import { UserDto } from 'src/app/model/user.model';
import { CustomAuthService } from '../custom-auth.service';
import { TokenStorageService } from '../token/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinForm: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  private signinDto!: SigninDto;

  constructor(private authService: CustomAuthService, private tokenStorage: TokenStorageService,
    private router: Router) { }

  ngOnInit() {
    if(this.tokenStorage.getToken()!=null){
      this.router.navigate(['employees']).then(e => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
    }
  }

  onSubmit() {
    this.signinDto = new SigninDto(
      this.signinForm.username,
      this.signinForm.password);

    this.authService.signIn(this.signinDto).subscribe(
      jwtResp => {
        this.tokenStorage.saveToken(jwtResp.token);
        this.tokenStorage.saveAuthorities(jwtResp.role);

        if(jwtResp.token != null) {
          this.isLoginFailed = false;
          this.isLoggedIn = true;
        }
        
        this.router.navigate(['employees']).then(e => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
        });

      },
      error => {
        this.errorMessage = error.error;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.scroll(0, 0);
    window.location.href = '/home';
  }

  googleSignIn() { }
  facebookSignIn() { }

}