import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePermissionFormComponent } from './create-permission-form.component';

describe('CreatePermissionFormComponent', () => {
  let component: CreatePermissionFormComponent;
  let fixture: ComponentFixture<CreatePermissionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePermissionFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePermissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
