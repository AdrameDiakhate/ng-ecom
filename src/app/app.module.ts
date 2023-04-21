import { environment, firebaseConfig } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/layout/header/header.component';
import { AngularFireModule } from '@angular/fire/compat';
import "../app/configs/firebase"


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
