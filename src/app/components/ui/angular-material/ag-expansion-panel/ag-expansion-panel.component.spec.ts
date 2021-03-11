import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgExpansionPanelComponent } from './ag-expansion-panel.component';

describe('AgExpansionPanelComponent', () => {
  let component: AgExpansionPanelComponent;
  let fixture: ComponentFixture<AgExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgExpansionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
