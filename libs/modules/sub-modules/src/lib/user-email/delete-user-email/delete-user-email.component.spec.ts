import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteUserEmailComponent } from './delete-user-email.component';

describe('DeleteUserEmailComponent', () => {
  let component: DeleteUserEmailComponent;
  let fixture: ComponentFixture<DeleteUserEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteUserEmailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteUserEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
