import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PosProductCardListComponent } from './pos-product-card-list.component';

describe('PosProductCardListComponent', () => {
  let component: PosProductCardListComponent;
  let fixture: ComponentFixture<PosProductCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosProductCardListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PosProductCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
