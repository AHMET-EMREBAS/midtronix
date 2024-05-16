import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardSkuComponent } from './dashboard-sku.component';

describe('DashboardSkuComponent', () => {
  let component: DashboardSkuComponent;
  let fixture: ComponentFixture<DashboardSkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSkuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
