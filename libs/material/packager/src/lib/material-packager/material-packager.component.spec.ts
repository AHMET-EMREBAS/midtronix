import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialPackagerComponent } from './material-packager.component';

describe('MaterialPackagerComponent', () => {
  let component: MaterialPackagerComponent;
  let fixture: ComponentFixture<MaterialPackagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialPackagerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialPackagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
