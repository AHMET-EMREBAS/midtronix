import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerRoleComponent } from './customer-role.component';

describe('CustomerRoleComponent', () => {
  let component: CustomerRoleComponent;
  let fixture: ComponentFixture<CustomerRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerRoleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
