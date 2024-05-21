import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteTaxrateComponent } from './delete-taxrate.component';

describe('DeleteTaxrateComponent', () => {
  let component: DeleteTaxrateComponent;
  let fixture: ComponentFixture<DeleteTaxrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTaxrateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteTaxrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
