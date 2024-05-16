import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeTicketComponent } from './home-ticket.component';

describe('HomeTicketComponent', () => {
  let component: HomeTicketComponent;
  let fixture: ComponentFixture<HomeTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTicketComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
