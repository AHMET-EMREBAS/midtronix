import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModulesWebsiteComponent } from './modules-website.component';

describe('ModulesWebsiteComponent', () => {
  let component: ModulesWebsiteComponent;
  let fixture: ComponentFixture<ModulesWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulesWebsiteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModulesWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
