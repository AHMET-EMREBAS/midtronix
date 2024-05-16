import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCustomerEmailComponent } from './home-customer-email.component';

describe('HomeCustomerEmailComponent', () => {
  let component: HomeCustomerEmailComponent;
  let fixture: ComponentFixture<HomeCustomerEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCustomerEmailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCustomerEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
