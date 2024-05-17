import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCustomerPermissionComponent } from './create-customer-permission.component';

describe('CreateCustomerPermissionComponent', () => {
  let component: CreateCustomerPermissionComponent;
  let fixture: ComponentFixture<CreateCustomerPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCustomerPermissionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCustomerPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
