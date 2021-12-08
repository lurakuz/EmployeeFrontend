import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from '../model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: UserDto = new UserDto;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe(data=> {
      console.log(data);
    },
    error=>console.log(error));
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

}
