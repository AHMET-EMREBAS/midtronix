import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateTaxrateComponent } from './create-taxrate.component';

describe('CreateTaxrateComponent', () => {
  let component: CreateTaxrateComponent;
  let fixture: ComponentFixture<CreateTaxrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTaxrateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTaxrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
