import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModulesEmsComponent } from './modules-ems.component';

describe('ModulesEmsComponent', () => {
  let component: ModulesEmsComponent;
  let fixture: ComponentFixture<ModulesEmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulesEmsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModulesEmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
