import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewCustomerPermissionComponent } from './view-customer-permissions.component';

describe('ViewCustomerPermissionComponent', () => {
  let component: ViewCustomerPermissionComponent;
  let fixture: ComponentFixture<ViewCustomerPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCustomerPermissionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCustomerPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
