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
  constructor(private registerService: RegisterService) { 
  }

  ngOnInit(): void {
  }

  onUserRegistered(user:User){

    console.log(user)
  }

  // signUpWithEmailAndPwd(){
  //   this.registerService.signUpWithEmailAndPwd()
  // }

}
