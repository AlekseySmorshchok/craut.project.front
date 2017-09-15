import { Injectable} from '@angular/core';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import {CoreService} from './coreService';
import {Http, Response, Headers} from '@angular/http';
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {AuthConfigConsts, AuthHttp} from "angular2-jwt";

@Injectable()
export class AuthenticationService extends CoreService {
  public token: string;
  constructor(private http: Http,
              private authHttp: AuthHttp,
              private router: Router) {
    super();


    //const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //this.token = currentUser && currentUser.token;
  }
  login(username: string, password: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        `${this.webService}login`,
        JSON.stringify({username, password}),
        {headers}
      )
      .map(res => {
        return res.json();
      })
      .do(token => {
        localStorage.setItem(AuthConfigConsts.DEFAULT_TOKEN_NAME, token.token);
      });
  }
  logout() {
    localStorage.removeItem(AuthConfigConsts.DEFAULT_TOKEN_NAME);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  getMe() {
    return this.authHttp.get(`${this.webService}me`).map(res => res.json());
  }

}
