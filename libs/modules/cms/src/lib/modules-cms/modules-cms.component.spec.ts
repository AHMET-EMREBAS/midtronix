import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModulesCmsComponent } from './modules-cms.component';

describe('ModulesCmsComponent', () => {
  let component: ModulesCmsComponent;
  let fixture: ComponentFixture<ModulesCmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulesCmsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModulesCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
