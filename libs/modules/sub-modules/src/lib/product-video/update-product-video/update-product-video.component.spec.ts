import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateProductVideoComponent } from './update-product-video.component';

describe('UpdateProductVideoComponent', () => {
  let component: UpdateProductVideoComponent;
  let fixture: ComponentFixture<UpdateProductVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateProductVideoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateProductVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
