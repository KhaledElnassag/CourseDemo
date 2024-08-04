import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
 private isLogged:BehaviorSubject<boolean>
  constructor(private location:Location) {
    debugger;
    let token=false; 
    let val=localStorage.getItem('IsLogged');
    if(val=="true"){
      token=true;
    }
    this.isLogged=new BehaviorSubject<boolean>(token);
  }
get loggedSubject(){
return this.isLogged.asObservable();
}
logIn(){
  this.location.back();
  localStorage.setItem('IsLogged',"true");
  this.isLogged.next(true)
}

logOut(){
  localStorage.setItem('IsLogged',"false");
  this.isLogged.next(false)
}
get islogIn(){
  debugger;
  let val=localStorage.getItem('IsLogged');
  if(val=="true")
    return true;
  return false;
}
}
