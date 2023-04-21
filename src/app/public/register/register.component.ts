import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { RegisterService } from './service/register.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = new User;
  constructor(private registerService: RegisterService, private router: Router) { 
  }

  ngOnInit(): void {
  }

  onUserRegistered(user:User){
    console.log(user)
    this.user=user
    this.signUpWithEmailAndPwd()
  }

  signUpWithEmailAndPwd(){
    this.registerService.SignUp(this.user.email,this.user.password).then((data)=>{
      this.router.navigate(['/'])
      console.log(this.user)
    },(error)=>{
      alert(error)
    })
  }
}
