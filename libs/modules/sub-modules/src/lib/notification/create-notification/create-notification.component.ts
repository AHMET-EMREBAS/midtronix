import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationFormComponent } from '@mdtx/forms';
import { INotification } from '@mdtx/common';
import { NotificationService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-notification',
  standalone: true,
  imports: [CommonModule, NotificationFormComponent],
  templateUrl: './create-notification.component.html',
  styleUrl: './create-notification.component.scss',
  providers: [NotificationService],
})
export class CreateNotificationComponent {
  constructor(protected readonly service: NotificationService) {}
  handleSubmit(notification: INotification) {
    this.service.add(notification);
  }
}
