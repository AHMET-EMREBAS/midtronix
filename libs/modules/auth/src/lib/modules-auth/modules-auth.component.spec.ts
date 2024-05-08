import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModulesAuthComponent } from './modules-auth.component';

describe('ModulesAuthComponent', () => {
  let component: ModulesAuthComponent;
  let fixture: ComponentFixture<ModulesAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulesAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModulesAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
