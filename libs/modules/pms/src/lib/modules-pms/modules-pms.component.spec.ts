import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModulesPmsComponent } from './modules-pms.component';

describe('ModulesPmsComponent', () => {
  let component: ModulesPmsComponent;
  let fixture: ComponentFixture<ModulesPmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulesPmsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModulesPmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
