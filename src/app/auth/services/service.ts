import { Injectable } from '@angular/core';
import { FirestoreModule } from '@angular/fire/firestore';

@Injectable ({
  providedIn: 'root'
})
export class Service {
  constructor( private db: FirestoreModule) {}

  
}