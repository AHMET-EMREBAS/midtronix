import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeSkuComponent } from './home-sku.component';

describe('HomeSkuComponent', () => {
  let component: HomeSkuComponent;
  let fixture: ComponentFixture<HomeSkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSkuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
