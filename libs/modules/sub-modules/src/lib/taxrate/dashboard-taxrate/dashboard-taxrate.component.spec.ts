import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardTaxrateComponent } from './dashboard-taxrate.component';

describe('DashboardTaxrateComponent', () => {
  let component: DashboardTaxrateComponent;
  let fixture: ComponentFixture<DashboardTaxrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTaxrateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardTaxrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
