import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModulesPosComponent } from './modules-pos.component';

describe('ModulesPosComponent', () => {
  let component: ModulesPosComponent;
  let fixture: ComponentFixture<ModulesPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulesPosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModulesPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
