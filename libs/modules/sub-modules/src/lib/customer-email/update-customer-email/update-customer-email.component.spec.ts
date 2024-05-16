import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateCustomerEmailComponent } from './update-customer-email.component';

describe('UpdateCustomerEmailComponent', () => {
  let component: UpdateCustomerEmailComponent;
  let fixture: ComponentFixture<UpdateCustomerEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCustomerEmailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateCustomerEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
