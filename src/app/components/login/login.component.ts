import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _fauth: AuthService) { }

  ngOnInit(): void {
  }

  login(form){
    console.log(form);
    console.log(this._fauth.login(form.value.Email, form.value.password));
  }
}
