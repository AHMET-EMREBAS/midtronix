import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputEditorComponent } from './input-editor.component';

import { provideNoopAnimations } from '@angular/platform-browser/animations';
describe('InputEditorComponent', () => {
  let component: InputEditorComponent;
  let fixture: ComponentFixture<InputEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputEditorComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(InputEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
