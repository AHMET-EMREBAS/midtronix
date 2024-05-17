import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteCustomerRoleComponent } from './delete-customer-role.component';

describe('DeleteCustomerRoleComponent', () => {
  let component: DeleteCustomerRoleComponent;
  let fixture: ComponentFixture<DeleteCustomerRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCustomerRoleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteCustomerRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
