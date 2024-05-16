import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuantityTableComponent } from './quantity-table.component';

describe('QuantityTableComponent', () => {
  let component: QuantityTableComponent;
  let fixture: ComponentFixture<QuantityTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantityTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuantityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
