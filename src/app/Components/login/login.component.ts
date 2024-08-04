import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
isLogged:boolean;
constructor(private loginService:LoginServiceService) {
  debugger;
  this.isLogged=loginService.islogIn;
  loginService.loggedSubject.subscribe(val=>{
    this.isLogged==val;
  })
}
logIn(){
  this.loginService.logIn();
  this.isLogged=true;
}
logOut(){
  this.loginService.logOut();
  this.isLogged=false;
}
}
