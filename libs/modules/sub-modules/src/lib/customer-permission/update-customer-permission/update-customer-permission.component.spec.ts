import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateCustomerPermissionComponent } from './update-customer-permission.component';

describe('UpdateCustomerPermissionComponent', () => {
  let component: UpdateCustomerPermissionComponent;
  let fixture: ComponentFixture<UpdateCustomerPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCustomerPermissionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateCustomerPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
