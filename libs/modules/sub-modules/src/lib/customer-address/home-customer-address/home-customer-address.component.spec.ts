import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCustomerAddressComponent } from './home-customer-address.component';

describe('HomeCustomerAddressComponent', () => {
  let component: HomeCustomerAddressComponent;
  let fixture: ComponentFixture<HomeCustomerAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCustomerAddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCustomerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
