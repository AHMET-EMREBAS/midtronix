import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductSmallCardListComponent } from './product-small-card-list.component';

describe('ProductSmallCardListComponent', () => {
  let component: ProductSmallCardListComponent;
  let fixture: ComponentFixture<ProductSmallCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSmallCardListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSmallCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
