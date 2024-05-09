import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputLikeComponent } from './input-like.component';

describe('InputLikeComponent', () => {
  let component: InputLikeComponent;
  let fixture: ComponentFixture<InputLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputLikeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
