import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaxrateTableComponent } from './taxrate-table.component';

describe('TaxrateTableComponent', () => {
  let component: TaxrateTableComponent;
  let fixture: ComponentFixture<TaxrateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxrateTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxrateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
