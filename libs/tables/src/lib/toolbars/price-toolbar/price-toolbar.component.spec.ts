import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriceToolbarComponent } from './price-toolbar.component';

describe('PriceToolbarComponent', () => {
  let component: PriceToolbarComponent;
  let fixture: ComponentFixture<PriceToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PriceToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
