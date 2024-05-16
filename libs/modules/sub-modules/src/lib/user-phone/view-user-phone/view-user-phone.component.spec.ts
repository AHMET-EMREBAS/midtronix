import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewUserPhoneComponent } from './view-user-phones.component';

describe('ViewUserPhoneComponent', () => {
  let component: ViewUserPhoneComponent;
  let fixture: ComponentFixture<ViewUserPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewUserPhoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewUserPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
