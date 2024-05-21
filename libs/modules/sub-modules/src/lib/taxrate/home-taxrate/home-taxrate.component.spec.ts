import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeTaxrateComponent } from './home-taxrate.component';

describe('HomeTaxrateComponent', () => {
  let component: HomeTaxrateComponent;
  let fixture: ComponentFixture<HomeTaxrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTaxrateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTaxrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
