import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputDatetimeComponent } from './input-datetime.component';

import { provideNoopAnimations } from '@angular/platform-browser/animations';
describe('InputDatetimeComponent', () => {
  let component: InputDatetimeComponent;
  let fixture: ComponentFixture<InputDatetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputDatetimeComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(InputDatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
