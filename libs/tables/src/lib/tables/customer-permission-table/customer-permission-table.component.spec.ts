import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerPermissionTableComponent } from './customer-permission-table.component';

describe('CustomerPermissionTableComponent', () => {
  let component: CustomerPermissionTableComponent;
  let fixture: ComponentFixture<CustomerPermissionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerPermissionTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerPermissionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
