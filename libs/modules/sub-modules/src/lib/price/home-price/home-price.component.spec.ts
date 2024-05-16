import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePriceComponent } from './home-price.component';

describe('HomePriceComponent', () => {
  let component: HomePriceComponent;
  let fixture: ComponentFixture<HomePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePriceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
