import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardManufacturerComponent } from './dashboard-manufacturer.component';

describe('DashboardManufacturerComponent', () => {
  let component: DashboardManufacturerComponent;
  let fixture: ComponentFixture<DashboardManufacturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardManufacturerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
