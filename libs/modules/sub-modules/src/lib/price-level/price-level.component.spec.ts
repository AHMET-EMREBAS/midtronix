import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriceLevelComponent } from './price-level.component';

describe('PriceLevelComponent', () => {
  let component: PriceLevelComponent;
  let fixture: ComponentFixture<PriceLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceLevelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
