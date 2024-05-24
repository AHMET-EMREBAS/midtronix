import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PosOrderCardListComponent } from './pos-order-card-list.component';

describe('PosOrderCardListComponent', () => {
  let component: PosOrderCardListComponent;
  let fixture: ComponentFixture<PosOrderCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosOrderCardListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PosOrderCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
