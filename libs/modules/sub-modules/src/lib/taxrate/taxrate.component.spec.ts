import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaxrateComponent } from './taxrate.component';

describe('TaxrateComponent', () => {
  let component: TaxrateComponent;
  let fixture: ComponentFixture<TaxrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxrateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
