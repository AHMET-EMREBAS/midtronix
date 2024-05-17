import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCustomerPermissionComponent } from './home-customer-permission.component';

describe('HomeCustomerPermissionComponent', () => {
  let component: HomeCustomerPermissionComponent;
  let fixture: ComponentFixture<HomeCustomerPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCustomerPermissionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCustomerPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
