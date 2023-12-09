import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { EnvironmentInjector, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from "rxjs";
import { enviroment } from "src/app/enviroments/enviroment.prod";
import { User } from "src/app/shared/models/user";

const WEB_API_KEY = enviroment.firebaseApiKey;
const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:register?key=${WEB_API_KEY}`;
const LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:register?key=${WEB_API_KEY}`;

export interface IAuthReqData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  returnSecureToken?: boolean;
  idToken?: string;
  refreshToken?: string;
  expiresIn?: string;
  localId?: string;
};
export interface IAuthResData{
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
  username: string;
  password: string | any;
  firstName: string;
  lastName: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  currUser = new BehaviorSubject<User | null>(null);
  private user: Observable<User | null> | undefined;
  tokenExpTimer: any;

  constructor(
    private router: Router,
    private http: HttpClient,
  ){}

  login(username: string, password: string){}
  signup(authData: IAuthReqData){
    const authRes = this.http
    .post<IAuthResData>(
      SIGNUP_URL,
      {
        ...authData,
        returnSecureToken: true,
      })
    .pipe(
        tap((res) => {
        const { firstName, lastName, email, password} = res;
        this.handleAuth(firstName,  lastName, email, password);
      }))

     return authRes;
  }
  logout(){
    this.currUser.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if(this.tokenExpTimer) {
      clearTimeout(this.tokenExpTimer);
    }
    this.tokenExpTimer = null;
  }
  autoLogOut(expDuration: number) {
    this.tokenExpTimer = setTimeout(() => {
      this.logout();
    }, expDuration);
  }
  private handleAuth(
    email: string,
    userId: string,
    token: string,
    expiresIn: number) {
      const expDate = new Date (
        new Date().getTime()
        +expiresIn * 1000);
     this.autoLogOut (expiresIn * 1000);
     localStorage.setItem('userData', JSON.stringify(User));
    }
    private handleError (errorRes: HttpErrorResponse) {
      let errorMsg = 'An unknown error occured!';
        if (!errorRes.error || !errorRes.error.error) {
          return throwError(() => new Error(errorMsg));
        }
        switch (errorRes.error.error.message) {
          case 'INVAILED_EMAIL_OR_PASSWORD!':
            errorMsg = 'This email or password is not correct!';
        }
        return throwError(() => new Error (errorMsg));
    }
}
