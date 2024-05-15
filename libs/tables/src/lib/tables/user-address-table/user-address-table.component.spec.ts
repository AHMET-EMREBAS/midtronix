import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAddressTableComponent } from './user-address-table.component';

describe('UserAddressTableComponent', () => {
  let component: UserAddressTableComponent;
  let fixture: ComponentFixture<UserAddressTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAddressTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAddressTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
