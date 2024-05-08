import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModulesInventoryComponent } from './modules-inventory.component';

describe('ModulesInventoryComponent', () => {
  let component: ModulesInventoryComponent;
  let fixture: ComponentFixture<ModulesInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulesInventoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModulesInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
