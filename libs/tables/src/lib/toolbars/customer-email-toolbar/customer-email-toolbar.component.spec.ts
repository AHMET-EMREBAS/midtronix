import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerEmailToolbarComponent } from './customer-email-toolbar.component';

describe('CustomerEmailToolbarComponent', () => {
  let component: CustomerEmailToolbarComponent;
  let fixture: ComponentFixture<CustomerEmailToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerEmailToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerEmailToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
