import {animate, Component, state, style, transition, trigger} from '@angular/core';
import { Router } from '@angular/router';
import {UserModel} from '../../../model/user';
import {UserService} from '../../../service/userService';
import {AuthenticationService} from '../../../service/AuthentificationService';
import {Http} from "@angular/http";


declare let $: any;
@Component({
  selector: 'app-login-page',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginPageComponent {
  error: string;
  private user: UserModel = new UserModel();
  constructor(private authenticationService: AuthenticationService,
              private userServise: UserService,
              private router: Router,
              private userService: UserService) {

  }
  checkLogin() {}
  checkPassword() {}
  loading = false;
  returnUrl: string;
  errorMessage: string;
  login(data: any) {
    this.loading = true;
    this.errorMessage = null;
    this.authenticationService.login(this.user._email, this.user._password)
      .flatMap(data => {
        return this.authenticationService.getMe();
      })
      .subscribe(
        data => {
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.router.navigate(['/']);
        },
        error => {
          this.loading = false;
          console.log(this.errorMessage = error);
        }
      );
  }
}
