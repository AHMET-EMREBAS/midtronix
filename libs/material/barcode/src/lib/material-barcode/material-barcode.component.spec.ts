import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialBarcodeComponent } from './material-barcode.component';

describe('MaterialBarcodeComponent', () => {
  let component: MaterialBarcodeComponent;
  let fixture: ComponentFixture<MaterialBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialBarcodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
