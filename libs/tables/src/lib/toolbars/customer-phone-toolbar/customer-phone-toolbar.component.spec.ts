import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerPhoneToolbarComponent } from './customer-phone-toolbar.component';

describe('CustomerPhoneToolbarComponent', () => {
  let component: CustomerPhoneToolbarComponent;
  let fixture: ComponentFixture<CustomerPhoneToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerPhoneToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerPhoneToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
