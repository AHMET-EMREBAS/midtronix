import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeProductImageComponent } from './home-product-image.component';

describe('HomeProductImageComponent', () => {
  let component: HomeProductImageComponent;
  let fixture: ComponentFixture<HomeProductImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProductImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeProductImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
