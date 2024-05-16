import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewUserAddressComponent } from './view-user-addresss.component';

describe('ViewUserAddressComponent', () => {
  let component: ViewUserAddressComponent;
  let fixture: ComponentFixture<ViewUserAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewUserAddressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewUserAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
