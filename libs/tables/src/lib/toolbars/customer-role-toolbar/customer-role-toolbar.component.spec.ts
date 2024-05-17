import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerRoleToolbarComponent } from './customer-role-toolbar.component';

describe('CustomerRoleToolbarComponent', () => {
  let component: CustomerRoleToolbarComponent;
  let fixture: ComponentFixture<CustomerRoleToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerRoleToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerRoleToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
