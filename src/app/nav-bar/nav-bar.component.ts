import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  title = 'Angular 10 Spring Boot CRUD Full Stack App';

  constructor() { }

  ngOnInit(): void {
  }

}
