import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePriceLevelComponent } from './create-price-level.component';

describe('CreatePriceLevelComponent', () => {
  let component: CreatePriceLevelComponent;
  let fixture: ComponentFixture<CreatePriceLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePriceLevelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePriceLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
