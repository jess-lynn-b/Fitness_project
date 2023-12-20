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
    "https://http-with-max-a0a7a-default-rtdb.firebaseio.com/info.json";

    constructor(
      private http: HttpClient,
      private authService: AuthService,
      private activityService: ActivityService,
      private foodService: FoodService,
      private userService: UserService
    ){}
    // *Methods* - Saving to Firebase Database
    saveFoodToFirebase(){
      const food = this.foodService.getFoods();
      this.http.put(this.firebaseRootURL, food)
      .subscribe();
    }

    saveUserToFirebase(){
      const users = this.userService.getSavedUsers();
      this.http.put(this.firebaseRootURL, users)
      .subscribe();
    }

    saveActivityToFirebase(){
      const activity = this.activityService.getActivities();
      this.http.put(this.firebaseRootURL, activity)
      .subscribe();
    }


    // *Methods -Fetch from Firebase Database

    getFoodFromFirebase(){
      const fbFood = this.http.get<Food[]>(this.firebaseRootURL)
      .pipe(
        tap((food: Food[]) => {
          return this.foodService.setFood(food);
        })
      );
      return fbFood;
    }

    getUserFromFirebase(){
      return this.http
      .get(this.firebaseRootURL, {})
      .subscribe(() => {
        this.userService.getSavedUsers();
      });
    }
    getActivityFromFirebase(){
      return this.http
      .get(this.firebaseRootURL, {})
      .subscribe(() => {
        this.activityService.getActivities();
      });
    }

}
