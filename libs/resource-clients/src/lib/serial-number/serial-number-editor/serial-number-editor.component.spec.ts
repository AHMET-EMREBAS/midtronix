import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SerialNumberEditorComponent } from './serial-number-editor.component';

describe('SerialNumberEditorComponent', () => {
  let component: SerialNumberEditorComponent;
  let fixture: ComponentFixture<SerialNumberEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SerialNumberEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SerialNumberEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
