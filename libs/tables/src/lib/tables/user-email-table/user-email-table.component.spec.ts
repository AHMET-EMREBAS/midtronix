import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserEmailTableComponent } from './user-email-table.component';

describe('UserEmailTableComponent', () => {
  let component: UserEmailTableComponent;
  let fixture: ComponentFixture<UserEmailTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEmailTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserEmailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
