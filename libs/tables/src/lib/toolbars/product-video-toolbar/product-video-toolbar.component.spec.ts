import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductVideoToolbarComponent } from './product-video-toolbar.component';

describe('ProductVideoToolbarComponent', () => {
  let component: ProductVideoToolbarComponent;
  let fixture: ComponentFixture<ProductVideoToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductVideoToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductVideoToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
