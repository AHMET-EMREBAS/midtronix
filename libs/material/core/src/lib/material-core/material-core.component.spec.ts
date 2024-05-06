import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialCoreComponent } from './material-core.component';

describe('MaterialCoreComponent', () => {
  let component: MaterialCoreComponent;
  let fixture: ComponentFixture<MaterialCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialCoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
