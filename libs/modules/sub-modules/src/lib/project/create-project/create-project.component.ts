import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectFormComponent } from '@mdtx/forms';
import { IProject } from '@mdtx/common';
import { ProjectService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-project',
  standalone: true,
  imports: [CommonModule, ProjectFormComponent],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss',
  providers: [ProjectService],
})
export class CreateProjectComponent {
  constructor(protected readonly service: ProjectService) {}
  handleSubmit(project: IProject) {
    this.service.add(project);
  }
}
