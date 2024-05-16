import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardCustomerEmailComponent } from './dashboard-customer-email.component';

describe('DashboardCustomerEmailComponent', () => {
  let component: DashboardCustomerEmailComponent;
  let fixture: ComponentFixture<DashboardCustomerEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCustomerEmailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCustomerEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
