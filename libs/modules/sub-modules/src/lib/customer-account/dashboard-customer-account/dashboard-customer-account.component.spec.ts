import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardCustomerAccountComponent } from './dashboard-customer-account.component';

describe('DashboardCustomerAccountComponent', () => {
  let component: DashboardCustomerAccountComponent;
  let fixture: ComponentFixture<DashboardCustomerAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCustomerAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCustomerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
