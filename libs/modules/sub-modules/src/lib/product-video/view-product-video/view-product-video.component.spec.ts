import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewProductVideoComponent } from './view-product-videos.component';

describe('ViewProductVideoComponent', () => {
  let component: ViewProductVideoComponent;
  let fixture: ComponentFixture<ViewProductVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProductVideoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewProductVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
