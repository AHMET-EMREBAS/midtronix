import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardUserEmailComponent } from './dashboard-user-email.component';

describe('DashboardUserEmailComponent', () => {
  let component: DashboardUserEmailComponent;
  let fixture: ComponentFixture<DashboardUserEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUserEmailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardUserEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
