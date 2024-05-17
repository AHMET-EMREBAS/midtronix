import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardCustomerPermissionComponent } from './dashboard-customer-permission.component';

describe('DashboardCustomerPermissionComponent', () => {
  let component: DashboardCustomerPermissionComponent;
  let fixture: ComponentFixture<DashboardCustomerPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCustomerPermissionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardCustomerPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
