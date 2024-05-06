import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialMaterialComponent } from './material-material.component';

describe('MaterialMaterialComponent', () => {
  let component: MaterialMaterialComponent;
  let fixture: ComponentFixture<MaterialMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialMaterialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
