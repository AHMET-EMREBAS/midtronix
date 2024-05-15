import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductImageTableComponent } from './product-image-table.component';

describe('ProductImageTableComponent', () => {
  let component: ProductImageTableComponent;
  let fixture: ComponentFixture<ProductImageTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductImageTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductImageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
