import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardUserPhoneComponent } from './dashboard-user-phone.component';

describe('DashboardUserPhoneComponent', () => {
  let component: DashboardUserPhoneComponent;
  let fixture: ComponentFixture<DashboardUserPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUserPhoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardUserPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
