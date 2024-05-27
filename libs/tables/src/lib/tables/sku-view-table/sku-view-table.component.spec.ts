import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkuViewTableComponent } from './sku-view-table.component';

describe('SkuViewTableComponent', () => {
  let component: SkuViewTableComponent;
  let fixture: ComponentFixture<SkuViewTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkuViewTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkuViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
