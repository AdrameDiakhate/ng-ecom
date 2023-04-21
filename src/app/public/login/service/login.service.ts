import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private afAuth:AngularFireAuth) { }

  signIn(email:string,password:string){
    return this.afAuth.signInWithEmailAndPassword(email,password)
  }

  signOut(){
    this.afAuth.signOut()
  }
}
