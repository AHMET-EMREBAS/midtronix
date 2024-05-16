import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPriceLevelComponent } from './view-price-levels.component';

describe('ViewPriceLevelComponent', () => {
  let component: ViewPriceLevelComponent;
  let fixture: ComponentFixture<ViewPriceLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPriceLevelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPriceLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
