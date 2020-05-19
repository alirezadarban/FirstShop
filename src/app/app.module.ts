import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthService } from './services/auth.service';

const config = {
  apiKey: 'AIzaSyAI-XGWihuBVF1wUCbTZF-haoZz0N-futc',
  authDomain: 'e-commerce-30fb1.firebaseapp.com',
  databaseURL: 'https://e-commerce-30fb1.firebaseio.com',
  projectId: 'e-commerce-30fb1',
  storageBucket: 'e-commerce-30fb1.appspot.com',
  messagingSenderId: '233364233368',
  appId: '1:233364233368:web:69a8e6f9c8a936f9e804ed',
  measurementId: 'G-XXRNQCKQ1S'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    LogOutComponent,
    CartComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,

    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [AngularFirestoreModule, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
