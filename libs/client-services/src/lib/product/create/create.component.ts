import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormComponent,
  CommonFormModule,
  InputTextComponent,
  InputTextareaComponent,
} from '@mdtx/material/form';
import { MatStepperModule } from '@angular/material/stepper';
import { FormGroup } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';
import { ProductForm } from '../../managers';

@Component({
  selector: 'mdtx-create',
  standalone: true,
  imports: [
    CommonFormModule,
    MatStepperModule,
    FormComponent,
    InputTextComponent,
    InputTextareaComponent,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent
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
