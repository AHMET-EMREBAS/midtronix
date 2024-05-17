import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardCustomerRoleComponent } from './dashboard-customer-role.component';

describe('DashboardCustomerRoleComponent', () => {
  let component: DashboardCustomerRoleComponent;
  let fixture: ComponentFixture<DashboardCustomerRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCustomerRoleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCustomerRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
