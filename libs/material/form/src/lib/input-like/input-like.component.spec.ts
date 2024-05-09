import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputLikeComponent } from './input-like.component';

import { provideNoopAnimations } from '@angular/platform-browser/animations';
describe('InputLikeComponent', () => {
  let component: InputLikeComponent;
  let fixture: ComponentFixture<InputLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputLikeComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(InputLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
