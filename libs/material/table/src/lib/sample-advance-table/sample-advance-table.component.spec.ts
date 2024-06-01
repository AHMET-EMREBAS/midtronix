import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleAdvanceTableComponent } from './sample-advance-table.component';

describe('SampleAdvanceTableComponent', () => {
  let component: SampleAdvanceTableComponent;
  let fixture: ComponentFixture<SampleAdvanceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleAdvanceTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleAdvanceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
