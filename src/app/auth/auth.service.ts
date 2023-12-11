import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { enviroment } from 'src/app/enviroments/enviroment.prod';
import { User } from 'src/app/shared/models/user';

const WEB_API_KEY = enviroment.firebaseApiKey;
const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:register?key=${WEB_API_KEY}`;
const LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:register?key=${WEB_API_KEY}`;

export interface IAuthReqData {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}
export interface IAuthResData {
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
  token: string | undefined;
  currUser = new BehaviorSubject<User>(null!);
  private tokenExpirationTimer: any;

  constructor(private router: Router, private http: HttpClient) {}


  login(authData: IAuthReqData) {
    if (!authData.email || !authData.password) return;

    const authRes = this.http
      .post<IAuthResData>(LOGIN_URL, {
        ...authData,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuth(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  signup(authData: IAuthReqData) {
    if (!authData.email || !authData.password) return;

    const authRes = this.http
      .post<IAuthResData>(SIGNUP_URL, {
        ...authData,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuth(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }
  onSubmit(email: string, password: string){
    const onSubmitData = {email: email, password: password};
      this.http.post<{userEmail: String, userId: String, token: String, refreshToken: String, expiresIn: number, userType: string} > (URL + 'onSubmit', onSubmitData);
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
  get Token(){
    return
  }
  private handleAuth(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);
  }
  private handleError(errorRes: HttpErrorResponse) {
    let errorMsg = 'An unknown error occured!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => new Error(errorMsg));
    }
    switch (errorRes.error.error.message) {
      case 'INVAILED_EMAIL_OR_PASSWORD!':
        errorMsg = 'This email or password is not correct!';
    }
    return throwError(() => new Error(errorMsg));
  }
}
