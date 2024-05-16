import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeProductVideoComponent } from './home-product-video.component';

describe('HomeProductVideoComponent', () => {
  let component: HomeProductVideoComponent;
  let fixture: ComponentFixture<HomeProductVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProductVideoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeProductVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
