import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food.service';
import { Food } from '../food.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
  @Input() food: Food | undefined;
  subscription: Subscription | undefined;
  foodId: number = 0;
  foodDetails!: Food;
  editMode = false;
  editedFoodIndex!: number;

  foodForm!: FormGroup;

  @Input() isModalVisible = false;
  @Output() toggleModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foodService: FoodService) {}

  ngOnInit(): void {
    this.subscription = this.foodService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedFoodIndex = index;
          this.editMode = true;
          // this.food = this.foodService.getFoodById(this.foodService.getFoods(), index);

          console.log('EditMode:', this.editMode);
          console.log('Food:', this.food);

          if (this.food) {
            this.initForm();
            this.isModalVisible = true;
          }
        }
      );

    if (!this.foodForm) {
      this.initForm();
    }
  }

  private initForm() {
    let foodTitle = '';
    let foodCalories = 0;
    let foodNotes = '';
    let foodCategory = '';

    if (this.editMode && this.food) {
      foodTitle = this.food.title;
      foodCalories = this.food.calories;
      foodNotes = this.food.notes;
      foodCategory = this.food.category;
    }

    this.foodForm = new FormGroup({
      'title': new FormControl(foodTitle, Validators.required),
      'calories': new FormControl(foodCalories, Validators.required),
      'notes': new FormControl(foodNotes),
      'category': new FormControl(foodCategory, Validators.required),
    });
  }

  onUpdateFood() {
    const value = this.foodForm.value;

    if (typeof this.editMode === 'boolean') {
      let newFood: Food;

      if (this.editMode && this.food) {
        newFood = new Food(
          this.food.id || 0,
          value.title,
          value.calories,
          value.category,
          value.notes
        );
      } else {
        newFood = new Food(
          value.id,
          value.title,
          value.calories,
          value.category,
          value.notes
        );
      }
      //uncomment when ready to work on it, was giving errors while not in use
      
      // if (this.editMode) {
      //   this.foodService.editFood(this.editedFoodIndex, newFood);
      // } else {
      //   this.foodService.addFood(newFood);
      // }

      this.editMode = false;
      this.foodForm.reset();
      this.isModalVisible = false;
    }
  }

  onCancel() {
    this.toggleModal.emit(false);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
