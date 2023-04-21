import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';



@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ]
})
export class RegisterModule { }
