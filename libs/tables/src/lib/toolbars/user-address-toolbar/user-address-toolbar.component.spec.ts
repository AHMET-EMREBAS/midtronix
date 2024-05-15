import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAddressToolbarComponent } from './user-address-toolbar.component';

describe('UserAddressToolbarComponent', () => {
  let component: UserAddressToolbarComponent;
  let fixture: ComponentFixture<UserAddressToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAddressToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAddressToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
