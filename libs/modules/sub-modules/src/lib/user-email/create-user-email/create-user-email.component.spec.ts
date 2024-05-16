import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUserEmailComponent } from './create-user-email.component';

describe('CreateUserEmailComponent', () => {
  let component: CreateUserEmailComponent;
  let fixture: ComponentFixture<CreateUserEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUserEmailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateUserEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
