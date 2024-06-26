import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPermissionComponent } from './view-permissions.component';

describe('ViewPermissionComponent', () => {
  let component: ViewPermissionComponent;
  let fixture: ComponentFixture<ViewPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewPermissionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
