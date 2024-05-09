import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTimeComponent } from './input-time.component';

import { provideNoopAnimations } from '@angular/platform-browser/animations';
describe('InputTimeComponent', () => {
  let component: InputTimeComponent;
  let fixture: ComponentFixture<InputTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTimeComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(InputTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
