import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputBaseComponent } from '../input-base';
import Quill  from 'quill';
@Component({
  selector: 'mdtx-input-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-editor.component.html',
  styleUrl: './input-editor.component.scss',
})
export class InputEditorComponent
  extends InputBaseComponent
  implements AfterViewInit
{
  @ViewChild('editor') editorContainer!: ElementRef<HTMLDivElement>;

  editor: any;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();

    const editor = new Quill(this.editorContainer.nativeElement, {
      theme: 'snow',
    });

    editor.on('text-change', (value: string) => {
      this.formControl.setValue(value);
    });

    this.formControl.valueChanges.subscribe((value) => {
      console.table({ controlValue: value });
    });
  }
}
