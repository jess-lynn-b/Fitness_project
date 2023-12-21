
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IntakeService {
  private caloricIntakeData: { date: string; intake: number }[] = [];

  addCaloricIntake(date: string, intake: number) {
    this.caloricIntakeData.push({ date, intake });
  }

  getCaloricIntake(): { date: string; intake: number }[] {
    return this.caloricIntakeData;
  }
}
