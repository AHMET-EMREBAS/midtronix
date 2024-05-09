import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputChipSelectComponent } from './input-chip-select.component';

import { provideNoopAnimations } from '@angular/platform-browser/animations';
describe('InputChipSelectComponent', () => {
  let component: InputChipSelectComponent;
  let fixture: ComponentFixture<InputChipSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputChipSelectComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(InputChipSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
