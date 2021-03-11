import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgBadgeComponent } from './ag-badge.component';

describe('AgBadgeComponent', () => {
  let component: AgBadgeComponent;
  let fixture: ComponentFixture<AgBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
