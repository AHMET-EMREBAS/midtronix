import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputPosSearchComponent } from './input-pos-search.component';

describe('InputPosSearchComponent', () => {
  let component: InputPosSearchComponent;
  let fixture: ComponentFixture<InputPosSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputPosSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputPosSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
