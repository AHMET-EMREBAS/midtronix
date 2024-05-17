import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerPermissionToolbarComponent } from './customer-permission-toolbar.component';

describe('CustomerPermissionToolbarComponent', () => {
  let component: CustomerPermissionToolbarComponent;
  let fixture: ComponentFixture<CustomerPermissionToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerPermissionToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerPermissionToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
