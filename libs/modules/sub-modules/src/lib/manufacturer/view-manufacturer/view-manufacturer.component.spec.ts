import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewManufacturerComponent } from './view-manufacturers.component';

describe('ViewManufacturerComponent', () => {
  let component: ViewManufacturerComponent;
  let fixture: ComponentFixture<ViewManufacturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewManufacturerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
