import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerAccountTableComponent } from './customer-account-table.component';

describe('CustomerAccountTableComponent', () => {
  let component: CustomerAccountTableComponent;
  let fixture: ComponentFixture<CustomerAccountTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerAccountTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerAccountTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
