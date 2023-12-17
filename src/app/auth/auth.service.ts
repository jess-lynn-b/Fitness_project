import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { BehaviorSubject, of, tap } from 'rxjs';
import { firebaseConfig } from 'src/app/enviroments/enviroment';
import { User } from 'src/app/auth/user.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// * Constants \\
const FIREBASE_WEB_API_KEY = firebaseConfig.apiKey;
const FIREBASE_SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signup?key=${FIREBASE_WEB_API_KEY}`;
const FIREBASE_LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:login?key=${FIREBASE_WEB_API_KEY}`;

export interface AuthReqData {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}
export interface AuthResData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  currUser = new BehaviorSubject<User>(null!);
  private tokenExpirationTimer: any;

  constructor(private router: Router, private http: HttpClient, private afAuth: AngularFireAuth) {}

  signUpWithEmailPassword(authData: AuthReqData) {
    if (!authData.email || !authData.password) return;
    const authRes = this.http
      .post<AuthResData>(FIREBASE_SIGNUP_URL, {
        ...authData,
        returnSecureToken: true,
      })
      .pipe(
        tap((res) => {
          const { email, localId, idToken, expiresIn } = res;

          this.handleAuth(email, localId, idToken, +expiresIn);
        })
      );
    return authRes;
  }
  loginWithEmailPassword(authData: AuthReqData) {
    if (!authData.email || !authData.password) return;
    let headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*');

    // const authRes = this.http
    //   .post<AuthResData>(FIREBASE_LOGIN_URL, {
    //     ...authData,
    //     returnSecureToken: true,
    //   }, {headers})
    //   .pipe(
    //     tap((res) => {
    //       const { email, localId, idToken, expiresIn } = res;
    //       this.handleAuth(email, localId, idToken, +expiresIn);
    //     })
    //   );

    this.afAuth.signInWithEmailAndPassword(authData.email, authData.password).then(response => console.log(response))
    return of(null);
  }
  signOut() {
    this.currUser.next(null!);
    this.router.navigate(['profile']);
  }
  autoLoginFromLocalStorage() {
    const userData = localStorage.getItem('userData');
    if (!userData) return;

    const lsUser: {
      id: string;
      email: string;
      _token: string;
      _tokenExpDate: string;
    } = JSON.parse(userData);

    const newUser = new User(
      lsUser.id,
      lsUser.email,
      lsUser._token,
      new Date(lsUser._tokenExpDate)
    );

    if (newUser.token) {
      this.currUser.next(newUser);
    }
  }
  logout() {
    this.currUser.next;
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }
  autoLogout(expDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expDuration);
  }
  private handleAuth(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);

    const newUser = new User(email, userId, token, expDate);
    this.currUser.next(newUser);

    this.autoLogout(expiresIn * 1000);
  }
}
