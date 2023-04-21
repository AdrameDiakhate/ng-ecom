import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  signinForm:FormGroup  
  @Output() userSignedIn= new EventEmitter<User>()

  constructor(private formBuilder:FormBuilder) {

    this.signinForm= this.formBuilder.group({
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(7)
      ])
    })
  }

  ngOnInit(): void {
  }


  signIn(){
    console.log("signin")
    this.userSignedIn.emit(this.signinForm.value)
  }
}
