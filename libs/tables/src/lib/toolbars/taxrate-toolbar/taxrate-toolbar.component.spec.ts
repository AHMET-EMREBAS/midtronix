import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaxrateToolbarComponent } from './taxrate-toolbar.component';

describe('TaxrateToolbarComponent', () => {
  let component: TaxrateToolbarComponent;
  let fixture: ComponentFixture<TaxrateToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxrateToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaxrateToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
