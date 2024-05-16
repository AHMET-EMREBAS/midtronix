import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePriceLevelComponent } from './home-price-level.component';

describe('HomePriceLevelComponent', () => {
  let component: HomePriceLevelComponent;
  let fixture: ComponentFixture<HomePriceLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePriceLevelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePriceLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
