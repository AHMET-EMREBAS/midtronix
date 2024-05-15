import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerAddressTableComponent } from './customer-address-table.component';

describe('CustomerAddressTableComponent', () => {
  let component: CustomerAddressTableComponent;
  let fixture: ComponentFixture<CustomerAddressTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerAddressTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerAddressTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
