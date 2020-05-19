import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {User} from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async signup(email: string, password: string) {
    await this.afAuth.createUserWithEmailAndPassword(email, password);
    this.router.navigate(['login']);
  }


  async login(email: string, password: string) {
    await this.afAuth.signInWithEmailAndPassword(email, password);
    this.router.navigate(['cart']);
  }

  async logout() {
    this.user = null;
    await this.afAuth.signOut();
    this.router.navigate(['']);
  }
}
