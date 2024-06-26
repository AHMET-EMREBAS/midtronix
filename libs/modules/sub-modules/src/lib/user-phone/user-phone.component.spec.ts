import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserPhoneComponent } from './user-phone.component';

describe('UserPhoneComponent', () => {
  let component: UserPhoneComponent;
  let fixture: ComponentFixture<UserPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPhoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
