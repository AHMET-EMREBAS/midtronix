import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewQuantityComponent } from './view-quantitys.component';

describe('ViewQuantityComponent', () => {
  let component: ViewQuantityComponent;
  let fixture: ComponentFixture<ViewQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewQuantityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
