import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputChipSelectComponent } from './input-chip-select.component';

describe('InputChipSelectComponent', () => {
  let component: InputChipSelectComponent;
  let fixture: ComponentFixture<InputChipSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputChipSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputChipSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
