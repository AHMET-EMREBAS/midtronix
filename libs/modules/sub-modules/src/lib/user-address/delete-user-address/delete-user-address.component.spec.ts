import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteUserAddressComponent } from './delete-user-address.component';

describe('DeleteUserAddressComponent', () => {
  let component: DeleteUserAddressComponent;
  let fixture: ComponentFixture<DeleteUserAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteUserAddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteUserAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
