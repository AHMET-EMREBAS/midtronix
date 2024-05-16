import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeUserEmailComponent } from './home-user-email.component';

describe('HomeUserEmailComponent', () => {
  let component: HomeUserEmailComponent;
  let fixture: ComponentFixture<HomeUserEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeUserEmailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeUserEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
