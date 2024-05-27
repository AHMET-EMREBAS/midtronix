import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCustomerAccountComponent } from './home-customer-account.component';

describe('HomeCustomerAccountComponent', () => {
  let component: HomeCustomerAccountComponent;
  let fixture: ComponentFixture<HomeCustomerAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCustomerAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCustomerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
