import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUserPhoneComponent } from './create-user-phone.component';

describe('CreateUserPhoneComponent', () => {
  let component: CreateUserPhoneComponent;
  let fixture: ComponentFixture<CreateUserPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUserPhoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateUserPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
