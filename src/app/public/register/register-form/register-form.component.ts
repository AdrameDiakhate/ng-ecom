import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm:FormGroup
  isregisterFormSubmitted=false
  
  @Output() userRegistered = new EventEmitter<User>();


  constructor(private formBuilder:FormBuilder) {

    this.registerForm=this.formBuilder.group({
      firstName: new UntypedFormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName: new UntypedFormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new UntypedFormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.email
      ]),
      password: new UntypedFormControl('',[
        Validators.required,
        Validators.minLength(7)
      ]),
})
   }
  
  ngOnInit(): void {

  }

  onSubmit(){
    this.isregisterFormSubmitted=true
    console.log("inscription")
    this.userRegistered.emit(this.registerForm.value)
  }
}
