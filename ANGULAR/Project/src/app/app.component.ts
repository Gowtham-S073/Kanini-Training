import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  roles="";
  isLoggedIn!:boolean;

  checkLoggedInUser(){
    this.isLoggedIn= this.authService.isLoggedIn();
    this.roles=this.authService.getUserRole();
  }
  logout(){
    this.authService.logout();
    this.Route.navigate(['/'])
  }
  constructor(private authService:AuthService, private Route:Router){
  }
}
