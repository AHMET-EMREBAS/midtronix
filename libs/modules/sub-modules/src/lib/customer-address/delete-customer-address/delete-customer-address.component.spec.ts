import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteCustomerAddressComponent } from './delete-customer-address.component';

describe('DeleteCustomerAddressComponent', () => {
  let component: DeleteCustomerAddressComponent;
  let fixture: ComponentFixture<DeleteCustomerAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCustomerAddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteCustomerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
