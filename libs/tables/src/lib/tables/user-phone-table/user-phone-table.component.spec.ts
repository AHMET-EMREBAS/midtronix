import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserPhoneTableComponent } from './user-phone-table.component';

describe('UserPhoneTableComponent', () => {
  let component: UserPhoneTableComponent;
  let fixture: ComponentFixture<UserPhoneTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPhoneTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPhoneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
