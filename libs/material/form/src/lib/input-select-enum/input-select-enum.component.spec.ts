import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputSelectEnumComponent } from './input-select-enum.component';

describe('InputSelectEnumComponent', () => {
  let component: InputSelectEnumComponent;
  let fixture: ComponentFixture<InputSelectEnumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSelectEnumComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputSelectEnumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
