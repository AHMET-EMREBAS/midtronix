import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardCustomerPhoneComponent } from './dashboard-customer-phone.component';

describe('DashboardCustomerPhoneComponent', () => {
  let component: DashboardCustomerPhoneComponent;
  let fixture: ComponentFixture<DashboardCustomerPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCustomerPhoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCustomerPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
