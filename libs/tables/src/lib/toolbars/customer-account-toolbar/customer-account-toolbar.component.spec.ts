import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerAccountToolbarComponent } from './customer-account-toolbar.component';

describe('CustomerAccountToolbarComponent', () => {
  let component: CustomerAccountToolbarComponent;
  let fixture: ComponentFixture<CustomerAccountToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerAccountToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerAccountToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
