import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateProductVideoComponent } from './create-product-video.component';

describe('CreateProductVideoComponent', () => {
  let component: CreateProductVideoComponent;
  let fixture: ComponentFixture<CreateProductVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProductVideoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateProductVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
