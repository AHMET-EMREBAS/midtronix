import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PurchaseToolbarComponent } from './purchase-toolbar.component';

describe('PurchaseToolbarComponent', () => {
  let component: PurchaseToolbarComponent;
  let fixture: ComponentFixture<PurchaseToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchaseToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
