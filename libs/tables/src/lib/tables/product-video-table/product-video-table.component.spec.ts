import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductVideoTableComponent } from './product-video-table.component';

describe('ProductVideoTableComponent', () => {
  let component: ProductVideoTableComponent;
  let fixture: ComponentFixture<ProductVideoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductVideoTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductVideoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
