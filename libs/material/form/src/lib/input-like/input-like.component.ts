import { Component } from '@angular/core';
import { InputBaseComponent } from '../input-base';
import { CommonFormModule } from '../form';

@Component({
  selector: 'mdtx-input-like',
  standalone: true,
  imports: [CommonFormModule],
  templateUrl: './input-like.component.html',
  styleUrl: './input-like.component.scss',
})
export class InputLikeComponent extends InputBaseComponent {
  toggleList = [undefined, true, false];
  liked: boolean | undefined = undefined;

  toggle() {
    const last = this.toggleList.shift();
    this.toggleList = [...this.toggleList, last];
    console.log(this.toggleList);
    this.liked = this.toggleList[0];
    this.inputControl.setValue(this.liked);
  }
}
