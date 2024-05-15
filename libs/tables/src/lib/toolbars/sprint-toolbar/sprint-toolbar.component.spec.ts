import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SprintToolbarComponent } from './sprint-toolbar.component';

describe('SprintToolbarComponent', () => {
  let component: SprintToolbarComponent;
  let fixture: ComponentFixture<SprintToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SprintToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SprintToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
