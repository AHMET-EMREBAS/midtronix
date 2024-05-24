import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PosOrderCardComponent } from './pos-order-card.component';

describe('PosOrderCardComponent', () => {
  let component: PosOrderCardComponent;
  let fixture: ComponentFixture<PosOrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosOrderCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PosOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
