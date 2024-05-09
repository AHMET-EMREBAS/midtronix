import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputButtonToggleComponent } from './input-button-toggle.component';

import { provideNoopAnimations } from '@angular/platform-browser/animations';
describe('InputButtonToggleComponent', () => {
  let component: InputButtonToggleComponent;
  let fixture: ComponentFixture<InputButtonToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputButtonToggleComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(InputButtonToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
