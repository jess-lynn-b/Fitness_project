import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth.service";

@Injectable ({ providedIn: 'root'})
export class DataStorageService {
  readonly firbaseRootURL =
  'https://fitness-codefi-default-rtdb.firebaseio.com/'
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ){}
}
