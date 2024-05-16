import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteSkuComponent } from './delete-sku.component';

describe('DeleteSkuComponent', () => {
  let component: DeleteSkuComponent;
  let fixture: ComponentFixture<DeleteSkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteSkuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
