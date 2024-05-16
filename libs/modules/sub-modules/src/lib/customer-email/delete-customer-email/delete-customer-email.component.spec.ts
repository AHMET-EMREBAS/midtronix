import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteCustomerEmailComponent } from './delete-customer-email.component';

describe('DeleteCustomerEmailComponent', () => {
  let component: DeleteCustomerEmailComponent;
  let fixture: ComponentFixture<DeleteCustomerEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCustomerEmailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteCustomerEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
