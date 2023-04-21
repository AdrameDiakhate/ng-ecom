import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private router:Router,private afAuth:AngularFireAuth) { }

  SignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

}
