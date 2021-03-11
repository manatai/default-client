import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgTabsComponent } from './ag-tabs.component';

describe('AgTabsComponent', () => {
  let component: AgTabsComponent;
  let fixture: ComponentFixture<AgTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
