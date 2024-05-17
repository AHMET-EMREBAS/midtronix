import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerRoleTableComponent } from './customer-role-table.component';

describe('CustomerRoleTableComponent', () => {
  let component: CustomerRoleTableComponent;
  let fixture: ComponentFixture<CustomerRoleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerRoleTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerRoleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
