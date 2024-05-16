import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardQuantityComponent } from './dashboard-quantity.component';

describe('DashboardQuantityComponent', () => {
  let component: DashboardQuantityComponent;
  let fixture: ComponentFixture<DashboardQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardQuantityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
