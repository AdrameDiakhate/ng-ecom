import { Router } from '@angular/router';
import { LoginService } from './../../login/service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSignedIn=false

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.isConnected()
  }

  isConnected():boolean{
    if(this.getValueIntoLocalStorage("email")){
      this.isSignedIn=true
      this.router.navigate(['/login'])
    }
    return this.isSignedIn
  }
  
  getValueIntoLocalStorage(key:string){
    return localStorage.getItem(key)
  }
  removeValueIntoLocalStorage(key:string){
    localStorage.removeItem(key)
  }
  signOut(){
    this.loginService.signOut()
    this.isSignedIn=false
    this.router.navigate(['/'])
    this.removeValueIntoLocalStorage("email")
  }
}
