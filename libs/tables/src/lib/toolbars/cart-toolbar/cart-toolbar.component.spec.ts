import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartToolbarComponent } from './cart-toolbar.component';

describe('CartToolbarComponent', () => {
  let component: CartToolbarComponent;
  let fixture: ComponentFixture<CartToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
