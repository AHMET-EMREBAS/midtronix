import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardProductImageComponent } from './dashboard-product-image.component';

describe('DashboardProductImageComponent', () => {
  let component: DashboardProductImageComponent;
  let fixture: ComponentFixture<DashboardProductImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProductImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardProductImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
