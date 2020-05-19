import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private _fauth: AuthService) { }

  ngOnInit(): void {
  }
  signup(form){
    console.log(form);
    this._fauth.signup(form.value.email, form.value.password);
  }

}
