import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewCustomerPhoneComponent } from './view-customer-phones.component';

describe('ViewCustomerPhoneComponent', () => {
  let component: ViewCustomerPhoneComponent;
  let fixture: ComponentFixture<ViewCustomerPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCustomerPhoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCustomerPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
