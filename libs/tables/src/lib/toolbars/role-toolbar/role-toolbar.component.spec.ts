import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoleToolbarComponent } from './role-toolbar.component';

describe('RoleToolbarComponent', () => {
  let component: RoleToolbarComponent;
  let fixture: ComponentFixture<RoleToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoleToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
