import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewUserEmailComponent } from './view-user-emails.component';

describe('ViewUserEmailComponent', () => {
  let component: ViewUserEmailComponent;
  let fixture: ComponentFixture<ViewUserEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewUserEmailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewUserEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
