import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeManufacturerComponent } from './home-manufacturer.component';

describe('HomeManufacturerComponent', () => {
  let component: HomeManufacturerComponent;
  let fixture: ComponentFixture<HomeManufacturerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeManufacturerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
