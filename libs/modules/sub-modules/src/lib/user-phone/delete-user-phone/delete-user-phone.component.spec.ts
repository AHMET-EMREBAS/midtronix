import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteUserPhoneComponent } from './delete-user-phone.component';

describe('DeleteUserPhoneComponent', () => {
  let component: DeleteUserPhoneComponent;
  let fixture: ComponentFixture<DeleteUserPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteUserPhoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteUserPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
