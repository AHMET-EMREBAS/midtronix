import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteQuantityComponent } from './delete-quantity.component';

describe('DeleteQuantityComponent', () => {
  let component: DeleteQuantityComponent;
  let fixture: ComponentFixture<DeleteQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteQuantityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
