import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteCustomerPermissionComponent } from './delete-customer-permission.component';

describe('DeleteCustomerPermissionComponent', () => {
  let component: DeleteCustomerPermissionComponent;
  let fixture: ComponentFixture<DeleteCustomerPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCustomerPermissionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteCustomerPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
