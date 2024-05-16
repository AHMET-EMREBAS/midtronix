import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeUserAddressComponent } from './home-user-address.component';

describe('HomeUserAddressComponent', () => {
  let component: HomeUserAddressComponent;
  let fixture: ComponentFixture<HomeUserAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeUserAddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeUserAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
