import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartmentToolbarComponent } from './department-toolbar.component';

describe('DepartmentToolbarComponent', () => {
  let component: DepartmentToolbarComponent;
  let fixture: ComponentFixture<DepartmentToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepartmentToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
