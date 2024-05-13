import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormComponent,
  CommonFormModule,
  InputTextComponent,
  InputTextareaComponent,
} from '@mdtx/material/form';
import { ProductForm } from '../forms';

import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'mdtx-product-form',
  standalone: true,
  imports: [
    CommonFormModule,
    MatStepperModule,
    FormComponent,
    InputTextComponent,
    InputTextareaComponent,
  ],
  template: `
    {{ firstStep.value | json }}
    <mat-stepper [linear]="true">
      <mat-step #firstStepRef label="Product" [stepControl]="firstStep">
        <form class="form-container" [formGroup]="firstStep">
          <mdtx-input-text
            [inputControl]="control('name')"
            label="Product Name"
          ></mdtx-input-text>

          <mdtx-input-text
            [inputControl]="control('upc')"
            label="UPC"
          ></mdtx-input-text>

          <mdtx-input-textarea
            label="Description"
            [inputControl]="control('description')"
          ></mdtx-input-textarea>
        </form>
      </mat-step>

      <mat-step label="Details" [stepControl]="secondStep">
        <form class="form-container" [formGroup]="secondStep">
          <mdtx-input-text
            [inputControl]="control('category')"
            label="Category"
          ></mdtx-input-text>

          <mdtx-input-text
            [inputControl]="control('department')"
            label="Department"
          ></mdtx-input-text>

          <mdtx-input-text
            [inputControl]="control('manufacturers')"
            label="Manufacturer"
          ></mdtx-input-text>
        </form>
      </mat-step>

      <mat-step label="Complete">
        <div class="form-actions">
          <button mat-raised-button color="primary" (click)="formSubmit()">
            Save Product
          </button>
          <button
            mat-raised-button
            color="primary"
            (click)="formReset(); firstStepRef.select()"
          >
            Reset
          </button>
        </div>
      </mat-step>
    </mat-stepper>
  `,
})
export class ProductFormComponent
  extends FormComponent
  implements OnInit, OnDestroy
{
  override resourceFormGroup!: FormGroup;
  firstStep!: FormGroup;
  secondStep!: FormGroup;
  groupForm!: FormGroup;
  sub!: Subscription;

  ngOnInit(): void {
    const controls = ProductForm.controls();
    const { name, upc, description, category, department, manufacturers } =
      controls;
    this.resourceFormGroup = new FormGroup({ ...controls });
    this.firstStep = new FormGroup({ name, upc, description });
    this.secondStep = new FormGroup({ category, department, manufacturers });

    this.groupForm = new FormGroup({
      first: this.firstStep,
      second: this.secondStep,
    });

    this.sub = this.groupForm.valueChanges
      .pipe(debounceTime(400))
      .subscribe((data) => {
        this.resourceFormGroup.patchValue(data);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
