import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeSprintComponent } from './home-sprint.component';

describe('HomeSprintComponent', () => {
  let component: HomeSprintComponent;
  let fixture: ComponentFixture<HomeSprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSprintComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
