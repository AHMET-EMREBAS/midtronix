import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputRadioComponent } from './input-radio.component';

import { provideNoopAnimations } from '@angular/platform-browser/animations';
describe('InputRadioComponent', () => {
  let component: InputRadioComponent;
  let fixture: ComponentFixture<InputRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputRadioComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(InputRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
