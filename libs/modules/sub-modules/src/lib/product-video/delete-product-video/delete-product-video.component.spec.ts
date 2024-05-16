import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteProductVideoComponent } from './delete-product-video.component';

describe('DeleteProductVideoComponent', () => {
  let component: DeleteProductVideoComponent;
  let fixture: ComponentFixture<DeleteProductVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProductVideoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteProductVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
