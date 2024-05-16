import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriceLevelToolbarComponent } from './price-level-toolbar.component';

describe('PriceLevelToolbarComponent', () => {
  let component: PriceLevelToolbarComponent;
  let fixture: ComponentFixture<PriceLevelToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceLevelToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceLevelToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
