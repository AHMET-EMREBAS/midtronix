import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeUserPhoneComponent } from './home-user-phone.component';

describe('HomeUserPhoneComponent', () => {
  let component: HomeUserPhoneComponent;
  let fixture: ComponentFixture<HomeUserPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeUserPhoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeUserPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
