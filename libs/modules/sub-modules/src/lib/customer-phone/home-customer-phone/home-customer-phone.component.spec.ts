import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCustomerPhoneComponent } from './home-customer-phone.component';

describe('HomeCustomerPhoneComponent', () => {
  let component: HomeCustomerPhoneComponent;
  let fixture: ComponentFixture<HomeCustomerPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCustomerPhoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCustomerPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
