import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputListSelectComponent } from './input-list-select.component';

import { provideNoopAnimations } from '@angular/platform-browser/animations';
describe('InputListSelectComponent', () => {
  let component: InputListSelectComponent;
  let fixture: ComponentFixture<InputListSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputListSelectComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(InputListSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
