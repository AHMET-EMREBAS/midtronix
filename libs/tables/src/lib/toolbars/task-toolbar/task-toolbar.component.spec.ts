import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskToolbarComponent } from './task-toolbar.component';

describe('TaskToolbarComponent', () => {
  let component: TaskToolbarComponent;
  let fixture: ComponentFixture<TaskToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
