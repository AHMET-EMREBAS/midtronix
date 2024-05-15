import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkuToolbarComponent } from './sku-toolbar.component';

describe('SkuToolbarComponent', () => {
  let component: SkuToolbarComponent;
  let fixture: ComponentFixture<SkuToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkuToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkuToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
