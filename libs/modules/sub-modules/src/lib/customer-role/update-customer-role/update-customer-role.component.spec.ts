import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateCustomerRoleComponent } from './update-customer-role.component';

describe('UpdateCustomerRoleComponent', () => {
  let component: UpdateCustomerRoleComponent;
  let fixture: ComponentFixture<UpdateCustomerRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCustomerRoleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateCustomerRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
