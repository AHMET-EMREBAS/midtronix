import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateQuantityComponent } from './create-quantity.component';

describe('CreateQuantityComponent', () => {
  let component: CreateQuantityComponent;
  let fixture: ComponentFixture<CreateQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateQuantityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
