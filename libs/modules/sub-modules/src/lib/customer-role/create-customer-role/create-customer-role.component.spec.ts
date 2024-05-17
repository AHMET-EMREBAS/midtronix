import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCustomerRoleComponent } from './create-customer-role.component';

describe('CreateCustomerRoleComponent', () => {
  let component: CreateCustomerRoleComponent;
  let fixture: ComponentFixture<CreateCustomerRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCustomerRoleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCustomerRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
