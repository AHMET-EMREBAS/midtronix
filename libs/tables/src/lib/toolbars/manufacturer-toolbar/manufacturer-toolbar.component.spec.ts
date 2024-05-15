import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManufacturerToolbarComponent } from './manufacturer-toolbar.component';

describe('ManufacturerToolbarComponent', () => {
  let component: ManufacturerToolbarComponent;
  let fixture: ComponentFixture<ManufacturerToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufacturerToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManufacturerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
