import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewCustomerAccountComponent } from './view-customer-accounts.component';

describe('ViewCustomerAccountComponent', () => {
  let component: ViewCustomerAccountComponent;
  let fixture: ComponentFixture<ViewCustomerAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCustomerAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCustomerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
