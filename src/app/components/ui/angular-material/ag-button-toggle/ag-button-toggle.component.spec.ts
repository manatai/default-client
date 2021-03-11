import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgButtonToggleComponent } from './ag-button-toggle.component';

describe('AgButtonToggleComponent', () => {
  let component: AgButtonToggleComponent;
  let fixture: ComponentFixture<AgButtonToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgButtonToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgButtonToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
