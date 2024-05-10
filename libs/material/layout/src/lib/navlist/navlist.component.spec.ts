import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavlistComponent } from './navlist.component';
import { provideNoopAnimations } from '@angular/platform-browser/animations';

describe('NavlistComponent', () => {
  let component: NavlistComponent;
  let fixture: ComponentFixture<NavlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavlistComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(NavlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
