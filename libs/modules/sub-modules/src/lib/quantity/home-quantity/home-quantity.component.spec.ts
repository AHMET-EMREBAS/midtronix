import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeQuantityComponent } from './home-quantity.component';

describe('HomeQuantityComponent', () => {
  let component: HomeQuantityComponent;
  let fixture: ComponentFixture<HomeQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeQuantityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
