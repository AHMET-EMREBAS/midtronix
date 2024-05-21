import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewTaxrateComponent } from './view-taxrates.component';

describe('ViewTaxrateComponent', () => {
  let component: ViewTaxrateComponent;
  let fixture: ComponentFixture<ViewTaxrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTaxrateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTaxrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
