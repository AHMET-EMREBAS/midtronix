import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewCustomerRoleComponent } from './view-customer-roles.component';

describe('ViewCustomerRoleComponent', () => {
  let component: ViewCustomerRoleComponent;
  let fixture: ComponentFixture<ViewCustomerRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCustomerRoleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCustomerRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
