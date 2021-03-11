import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgSortHeaderComponent } from './ag-sort-header.component';

describe('AgSortHeaderComponent', () => {
  let component: AgSortHeaderComponent;
  let fixture: ComponentFixture<AgSortHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgSortHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgSortHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
