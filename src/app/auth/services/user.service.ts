import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ProfileUserModel } from "src/app/shared/models/profile_user.model";
import { LocalStorageConfig } from "src/app/shared/configs/local-storage.config";
import { tap } from 'rxjs/operators';
import { User } from "../user.model";



@Injectable ({
  providedIn: 'root',
})
export class UserService {
  private savedUsers: User[] = [];
  http: any;

  constructor(){}
  getSavedUsers(){
    return this.savedUsers.slice();
  }

  public get(forceRefresh?:boolean, expectUnanth?:boolean) : Observable<ProfileUserModel> {
    const storedMe = localStorage.getItem(LocalStorageConfig.ME);
    if (storedMe && !forceRefresh){
      return of(JSON.parse(storedMe));
    }
    return this.http.get('user/me', {}, expectUnanth).pipe(
      tap((me: any) => {
        localStorage.setItem(LocalStorageConfig.ME, JSON.stringify(me));
      })
    );
  }

  fetchProfile() {
    throw new Error('Method not implemented.');
  }

}
