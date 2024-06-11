import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginWithSsoComponent } from './login-with-sso.component';

describe('LoginWithSsoComponent', () => {
  let component: LoginWithSsoComponent;
  let fixture: ComponentFixture<LoginWithSsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginWithSsoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginWithSsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
