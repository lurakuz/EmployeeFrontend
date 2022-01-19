import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupDto } from 'src/app/model/authentication/signup.model';
import { UserDto } from '../../../model/user.model';
import { CustomAuthService } from '../custom-auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  signupForm: SignupDto = new SignupDto;
  registrationIsSuccessful: boolean = false;

  constructor(private authService: CustomAuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.authService.signUp(this.signupForm).subscribe(data=> {
      console.log(data);
      this.registrationIsSuccessful = true;
      this.delay(1000);
      this.router.navigate(['/login']);
    },
    error=>console.log(error));
  }

  onSubmit(){
    console.log(this.signupForm);
    this.saveUser();
  }

  private delay(ms: number): Promise<unknown> {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

}
