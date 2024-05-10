import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleLayoutComponent } from './sample-layout.component';

describe('SampleLayoutComponent', () => {
  let component: SampleLayoutComponent;
  let fixture: ComponentFixture<SampleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
