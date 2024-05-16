import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewProductImageComponent } from './view-product-images.component';

describe('ViewProductImageComponent', () => {
  let component: ViewProductImageComponent;
  let fixture: ComponentFixture<ViewProductImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProductImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewProductImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
