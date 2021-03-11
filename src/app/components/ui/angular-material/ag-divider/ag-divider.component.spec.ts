import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgDividerComponent } from './ag-divider.component';

describe('AgDividerComponent', () => {
  let component: AgDividerComponent;
  let fixture: ComponentFixture<AgDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgDividerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
