import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginWithCodeFormComponent } from './login-with-code-form.component';

describe('LoginWithCodeFormComponent', () => {
  let component: LoginWithCodeFormComponent;
  let fixture: ComponentFixture<LoginWithCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginWithCodeFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginWithCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
