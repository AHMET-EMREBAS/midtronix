import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkuViewToolbarComponent } from './sku-view-toolbar.component';

describe('SkuViewToolbarComponent', () => {
  let component: SkuViewToolbarComponent;
  let fixture: ComponentFixture<SkuViewToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkuViewToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkuViewToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
