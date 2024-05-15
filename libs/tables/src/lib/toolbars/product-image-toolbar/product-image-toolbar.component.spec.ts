import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductImageToolbarComponent } from './product-image-toolbar.component';

describe('ProductImageToolbarComponent', () => {
  let component: ProductImageToolbarComponent;
  let fixture: ComponentFixture<ProductImageToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductImageToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductImageToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
