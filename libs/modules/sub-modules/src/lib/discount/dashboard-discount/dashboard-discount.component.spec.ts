import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardDiscountComponent } from './dashboard-discount.component';

describe('DashboardDiscountComponent', () => {
  let component: DashboardDiscountComponent;
  let fixture: ComponentFixture<DashboardDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardDiscountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
