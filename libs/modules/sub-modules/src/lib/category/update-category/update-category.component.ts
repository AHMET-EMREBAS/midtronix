import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryFormComponent } from '@mdtx/forms';
import { CategoryService } from '@mdtx/ngrx';
import { ICategory } from '@mdtx/common';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'mdtx-update-category',
  standalone: true,
  imports: [CommonModule, CategoryFormComponent],
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.scss',
  providers: [CategoryService],
})
export class UpdateCategoryComponent implements OnInit {
  defaultValue$!: Observable<ICategory>;
  itemId!: number;
  constructor(
    protected readonly service: CategoryService,
    protected readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const __id = this.route.snapshot.paramMap.get('id');
    if (__id) {
      this.itemId = +__id;
      this.defaultValue$ = this.service.getByKey(this.itemId);
    }
  }

  handleSubmit(formValue: ICategory) {
    this.service.update({ ...formValue, id: this.itemId });
  }
}
