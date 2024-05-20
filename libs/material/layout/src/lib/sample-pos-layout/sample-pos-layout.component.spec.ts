import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplePosLayoutComponent } from './sample-pos-layout.component';

describe('SamplePosLayoutComponent', () => {
  let component: SamplePosLayoutComponent;
  let fixture: ComponentFixture<SamplePosLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamplePosLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SamplePosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
