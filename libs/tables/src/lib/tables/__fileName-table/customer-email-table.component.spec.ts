import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerEmailTableComponent } from './customer-email-table.component';

describe('CustomerEmailTableComponent', () => {
  let component: CustomerEmailTableComponent;
  let fixture: ComponentFixture<CustomerEmailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerEmailTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerEmailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
