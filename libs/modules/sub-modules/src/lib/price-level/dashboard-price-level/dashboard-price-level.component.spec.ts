import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardPriceLevelComponent } from './dashboard-price-level.component';

describe('DashboardPriceLevelComponent', () => {
  let component: DashboardPriceLevelComponent;
  let fixture: ComponentFixture<DashboardPriceLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPriceLevelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPriceLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
