import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintFormComponent } from '@mdtx/forms';
import { ISprint } from '@mdtx/common';
import { SprintService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-sprint',
  standalone: true,
  imports: [CommonModule, SprintFormComponent],
  templateUrl: './create-sprint.component.html',
  styleUrl: './create-sprint.component.scss',
  providers: [SprintService],
})
export class CreateSprintComponent {
  constructor(protected readonly service: SprintService) {}
  handleSubmit(sprint: ISprint) {
    this.service.add(sprint);
  }
}
