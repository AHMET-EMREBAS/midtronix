import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from '@mdtx/forms';
import { ITask } from '@mdtx/common';
import { TaskService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-task',
  standalone: true,
  imports: [CommonModule, TaskFormComponent],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
  providers: [TaskService],
})
export class CreateTaskComponent {
  constructor(protected readonly service: TaskService) {}
  handleSubmit(task: ITask) {
    this.service.add(task);
  }
}
