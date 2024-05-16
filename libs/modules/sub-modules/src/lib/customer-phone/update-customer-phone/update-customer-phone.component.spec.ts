import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateCustomerPhoneComponent } from './update-customer-phone.component';

describe('UpdateCustomerPhoneComponent', () => {
  let component: UpdateCustomerPhoneComponent;
  let fixture: ComponentFixture<UpdateCustomerPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCustomerPhoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateCustomerPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
