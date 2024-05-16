import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteCustomerPhoneComponent } from './delete-customer-phone.component';

describe('DeleteCustomerPhoneComponent', () => {
  let component: DeleteCustomerPhoneComponent;
  let fixture: ComponentFixture<DeleteCustomerPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCustomerPhoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteCustomerPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
