import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SampleLayoutComponent } from './sample-layout.component';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

describe('SampleLayoutComponent', () => {
  let component: SampleLayoutComponent;
  let fixture: ComponentFixture<SampleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleLayoutComponent, RouterModule.forRoot([])],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
