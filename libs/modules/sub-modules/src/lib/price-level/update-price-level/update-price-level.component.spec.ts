import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePriceLevelComponent } from './update-price-level.component';

describe('UpdatePriceLevelComponent', () => {
  let component: UpdatePriceLevelComponent;
  let fixture: ComponentFixture<UpdatePriceLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePriceLevelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatePriceLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
