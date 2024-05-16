import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateProductImageComponent } from './create-product-image.component';

describe('CreateProductImageComponent', () => {
  let component: CreateProductImageComponent;
  let fixture: ComponentFixture<CreateProductImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProductImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateProductImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
