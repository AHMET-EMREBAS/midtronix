import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  InputTextComponent,
  InputCheckboxComponent,
} from '@mdtx/material/form';
import {
  CollectionBaseService,
  getEntityMetadataToken,
} from '@mdtx/material/core';
import { debounceTime } from 'rxjs';
import {
  ClientEntityMetadata,
  EntityMetadata,
  PropertyMetadata,
} from '@mdtx/common';
@Component({
  selector: 'mdtx-editor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    InputCheckboxComponent,
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
})
export class EditorComponent implements OnInit {
  formFields!: PropertyMetadata<any>[];

  constructor(
    public readonly formGroup: FormGroup,
    protected readonly service: CollectionBaseService,
    @Inject(getEntityMetadataToken())
    protected readonly metadata: ClientEntityMetadata<any>
  ) {}

  ngOnInit(): void {
    this.formFields = this.metadata.sortedColumns();
    this.formGroup.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      console.log('Form Value: ', value);
    });
  }
}
