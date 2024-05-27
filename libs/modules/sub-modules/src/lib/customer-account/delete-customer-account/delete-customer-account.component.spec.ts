import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteCustomerAccountComponent } from './delete-customer-account.component';

describe('DeleteCustomerAccountComponent', () => {
  let component: DeleteCustomerAccountComponent;
  let fixture: ComponentFixture<DeleteCustomerAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCustomerAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteCustomerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
