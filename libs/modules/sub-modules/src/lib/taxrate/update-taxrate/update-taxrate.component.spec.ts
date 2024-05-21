import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateTaxrateComponent } from './update-taxrate.component';

describe('UpdateTaxrateComponent', () => {
  let component: UpdateTaxrateComponent;
  let fixture: ComponentFixture<UpdateTaxrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTaxrateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateTaxrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
