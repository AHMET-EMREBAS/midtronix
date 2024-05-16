import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateUserPhoneComponent } from './update-user-phone.component';

describe('UpdateUserPhoneComponent', () => {
  let component: UpdateUserPhoneComponent;
  let fixture: ComponentFixture<UpdateUserPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateUserPhoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateUserPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
