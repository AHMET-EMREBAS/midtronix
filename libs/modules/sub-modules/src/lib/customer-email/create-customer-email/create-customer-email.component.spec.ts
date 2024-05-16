import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCustomerEmailComponent } from './create-customer-email.component';

describe('CreateCustomerEmailComponent', () => {
  let component: CreateCustomerEmailComponent;
  let fixture: ComponentFixture<CreateCustomerEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCustomerEmailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCustomerEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
