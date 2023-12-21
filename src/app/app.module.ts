import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CaloricIntakeComponent } from './data-tracker/caloric-intake/caloric-intake.component';
import { firebaseConfig } from './enviroments/enviroment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat'


@NgModule({
  declarations: [
    AppComponent,
    CaloricIntakeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide: FIREBASE_OPTIONS, useValue: firebaseConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }


