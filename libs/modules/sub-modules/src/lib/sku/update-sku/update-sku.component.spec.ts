import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateSkuComponent } from './update-sku.component';

describe('UpdateSkuComponent', () => {
  let component: UpdateSkuComponent;
  let fixture: ComponentFixture<UpdateSkuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSkuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
