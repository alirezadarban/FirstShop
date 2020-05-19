import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CartComponent} from './components/cart/cart.component';
import {LoginComponent} from './components/login/login.component';
import {LogOutComponent} from './components/log-out/log-out.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {NotFoundComponent} from './components/not-found/not-found.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'log-out', component: LogOutComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
