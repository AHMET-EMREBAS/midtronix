import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewDiscountComponent } from './view-discounts.component';

describe('ViewDiscountComponent', () => {
  let component: ViewDiscountComponent;
  let fixture: ComponentFixture<ViewDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDiscountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
