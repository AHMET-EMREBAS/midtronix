import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardDepartmentComponent } from './dashboard-department.component';

describe('DashboardDepartmentComponent', () => {
  let component: DashboardDepartmentComponent;
  let fixture: ComponentFixture<DashboardDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardDepartmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
