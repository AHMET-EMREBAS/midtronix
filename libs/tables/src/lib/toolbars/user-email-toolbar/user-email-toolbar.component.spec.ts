import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserEmailToolbarComponent } from './user-email-toolbar.component';

describe('UserEmailToolbarComponent', () => {
  let component: UserEmailToolbarComponent;
  let fixture: ComponentFixture<UserEmailToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEmailToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserEmailToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
