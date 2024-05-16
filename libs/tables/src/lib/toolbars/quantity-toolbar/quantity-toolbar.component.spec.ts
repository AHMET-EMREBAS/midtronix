import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuantityToolbarComponent } from './quantity-toolbar.component';

describe('QuantityToolbarComponent', () => {
  let component: QuantityToolbarComponent;
  let fixture: ComponentFixture<QuantityToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantityToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuantityToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
