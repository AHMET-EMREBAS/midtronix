import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserPhoneToolbarComponent } from './user-phone-toolbar.component';

describe('UserPhoneToolbarComponent', () => {
  let component: UserPhoneToolbarComponent;
  let fixture: ComponentFixture<UserPhoneToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPhoneToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPhoneToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
