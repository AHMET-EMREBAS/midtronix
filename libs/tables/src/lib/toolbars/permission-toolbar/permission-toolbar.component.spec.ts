import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PermissionToolbarComponent } from './permission-toolbar.component';

describe('PermissionToolbarComponent', () => {
  let component: PermissionToolbarComponent;
  let fixture: ComponentFixture<PermissionToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermissionToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PermissionToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
