import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public user: AuthService) { }

  isOpen : boolean = false;

  toggleNavBar()
  {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
    console.log("this.user.user",typeof this.user.user)
  }

}
