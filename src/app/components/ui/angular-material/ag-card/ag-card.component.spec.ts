import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgCardComponent } from './ag-card.component';

describe('AgCardComponent', () => {
  let component: AgCardComponent;
  let fixture: ComponentFixture<AgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
