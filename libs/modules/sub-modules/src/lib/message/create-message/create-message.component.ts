import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageFormComponent } from '@mdtx/forms';
import { IMessage } from '@mdtx/common';
import { MessageService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-message',
  standalone: true,
  imports: [CommonModule, MessageFormComponent],
  templateUrl: './create-message.component.html',
  styleUrl: './create-message.component.scss',
  providers: [MessageService],
})
export class CreateMessageComponent {
  constructor(protected readonly service: MessageService) {}
  handleSubmit(message: IMessage) {
    this.service.add(message);
  }
}
