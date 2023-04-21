import { LoginService } from './service/login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { RegisterService } from '../register/service/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User=new User;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onUserSignedIn(user:User){
    this.user=user
    this.signInWithEmailAndPwd()
  }

  saveToLocalStorage(key:string,value:string){
    localStorage.setItem(key,value)
  }
  getValueIntoLocalStorage(key:string){
    return localStorage.getItem(key)
  }

  signInWithEmailAndPwd(){
    this.loginService.signIn(this.user.email,this.user.password).then((data)=>{
      this.saveToLocalStorage("email",this.user.email)
      this.router.navigate(['/'])
      console.log(this.user)
    },(error)=>{

    })
  }
}
