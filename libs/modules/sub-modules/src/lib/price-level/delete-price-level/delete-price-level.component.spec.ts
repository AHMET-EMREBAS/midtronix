import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeletePriceLevelComponent } from './delete-price-level.component';

describe('DeletePriceLevelComponent', () => {
  let component: DeletePriceLevelComponent;
  let fixture: ComponentFixture<DeletePriceLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePriceLevelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeletePriceLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
