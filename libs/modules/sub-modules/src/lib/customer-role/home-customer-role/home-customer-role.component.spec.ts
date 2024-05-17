import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCustomerRoleComponent } from './home-customer-role.component';

describe('HomeCustomerRoleComponent', () => {
  let component: HomeCustomerRoleComponent;
  let fixture: ComponentFixture<HomeCustomerRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCustomerRoleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCustomerRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
