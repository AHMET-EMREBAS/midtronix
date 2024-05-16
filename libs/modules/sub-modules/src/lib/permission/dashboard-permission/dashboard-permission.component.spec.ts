import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardPermissionComponent } from './dashboard-permission.component';

describe('DashboardPermissionComponent', () => {
  let component: DashboardPermissionComponent;
  let fixture: ComponentFixture<DashboardPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPermissionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
