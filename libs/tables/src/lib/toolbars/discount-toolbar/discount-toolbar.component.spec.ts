import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiscountToolbarComponent } from './discount-toolbar.component';

describe('DiscountToolbarComponent', () => {
  let component: DiscountToolbarComponent;
  let fixture: ComponentFixture<DiscountToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscountToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
