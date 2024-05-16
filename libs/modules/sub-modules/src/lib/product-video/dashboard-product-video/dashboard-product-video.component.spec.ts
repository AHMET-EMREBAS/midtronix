import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardProductVideoComponent } from './dashboard-product-video.component';

describe('DashboardProductVideoComponent', () => {
  let component: DashboardProductVideoComponent;
  let fixture: ComponentFixture<DashboardProductVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProductVideoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardProductVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
