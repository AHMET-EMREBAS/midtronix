import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerPhoneTableComponent } from './customer-phone-table.component';

describe('CustomerPhoneTableComponent', () => {
  let component: CustomerPhoneTableComponent;
  let fixture: ComponentFixture<CustomerPhoneTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerPhoneTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerPhoneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
