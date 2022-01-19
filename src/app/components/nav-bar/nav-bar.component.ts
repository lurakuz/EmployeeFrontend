import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomAuthService } from '../authentication/custom-auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  title = 'Angular 10 Spring Boot CRUD Full Stack App';

  constructor(private authService: CustomAuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
