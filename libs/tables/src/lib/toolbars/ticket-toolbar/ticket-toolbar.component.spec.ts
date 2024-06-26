import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketToolbarComponent } from './ticket-toolbar.component';

describe('TicketToolbarComponent', () => {
  let component: TicketToolbarComponent;
  let fixture: ComponentFixture<TicketToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
