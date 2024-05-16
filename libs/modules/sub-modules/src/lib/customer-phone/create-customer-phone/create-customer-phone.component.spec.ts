import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCustomerPhoneComponent } from './create-customer-phone.component';

describe('CreateCustomerPhoneComponent', () => {
  let component: CreateCustomerPhoneComponent;
  let fixture: ComponentFixture<CreateCustomerPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCustomerPhoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCustomerPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
