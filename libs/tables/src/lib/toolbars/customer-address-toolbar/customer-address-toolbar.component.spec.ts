import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerAddressToolbarComponent } from './customer-address-toolbar.component';

describe('CustomerAddressToolbarComponent', () => {
  let component: CustomerAddressToolbarComponent;
  let fixture: ComponentFixture<CustomerAddressToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerAddressToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerAddressToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
