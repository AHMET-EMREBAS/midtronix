import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardCustomerAddressComponent } from './dashboard-customer-address.component';

describe('DashboardCustomerAddressComponent', () => {
  let component: DashboardCustomerAddressComponent;
  let fixture: ComponentFixture<DashboardCustomerAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCustomerAddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCustomerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
