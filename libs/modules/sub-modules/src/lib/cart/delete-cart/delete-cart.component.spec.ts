import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteCartComponent } from './delete-cart.component';

describe('DeleteCartComponent', () => {
  let component: DeleteCartComponent;
  let fixture: ComponentFixture<DeleteCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
