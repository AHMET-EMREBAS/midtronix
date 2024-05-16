import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardSprintComponent } from './dashboard-sprint.component';

describe('DashboardSprintComponent', () => {
  let component: DashboardSprintComponent;
  let fixture: ComponentFixture<DashboardSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSprintComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
