import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { UserService } from "src/app/auth/services/user.service";
import { ActivityService } from "src/app/data-tracker/activity-tracker/activity.service";
import { Food } from "src/app/data-tracker/food-log/food.model";
import { FoodService } from "src/app/data-tracker/food-log/food.service";

@Injectable ({
  providedIn: "root"
})
export class HTTPService {
  firebaseRootURL =
    "https://fitness-codefi-default-rtdb.firebaseio.com/info.json";

    constructor(
      private http: HttpClient,
      private authService: AuthService,
      private userService: UserService
    ){}
    // *Methods* - Saving to Firebase Database
    saveUserToFirebase(){
      const users = this.userService.getSavedUsers();
      this.http.put(this.firebaseRootURL, users)
      .subscribe();
    }


    // *Methods -Fetch from Firebase Database

    getUserFromFirebase(){
      return this.http
      .get(this.firebaseRootURL, {})
      .subscribe(() => {
        this.userService.getSavedUsers();
      });
    }

}
