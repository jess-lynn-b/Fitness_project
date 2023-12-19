import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ProfileUserModel } from "src/app/shared/models/profile_user.model";
import { LocalStorageConfig } from "src/app/shared/configs/local-storage.config";
import { tap } from 'rxjs/operators';
import { ProfileModel } from "src/app/shared/models/profile.model";



@Injectable ({
  providedIn: 'root',
})
export class UserService {
  fetchProfile() {
    throw new Error('Method not implemented.');
  }
  http: any;
  constructor(){}
  public getMe(forceRefresh?:boolean, expectUnanth?:boolean) : Observable<ProfileUserModel> {
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

}
