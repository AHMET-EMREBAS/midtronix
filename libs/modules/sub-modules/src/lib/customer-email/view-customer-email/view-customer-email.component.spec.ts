import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewCustomerEmailComponent } from './view-customer-emails.component';

describe('ViewCustomerEmailComponent', () => {
  let component: ViewCustomerEmailComponent;
  let fixture: ComponentFixture<ViewCustomerEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCustomerEmailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCustomerEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
