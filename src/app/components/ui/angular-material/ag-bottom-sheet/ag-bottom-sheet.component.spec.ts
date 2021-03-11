import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgBottomSheetComponent } from './ag-bottom-sheet.component';

describe('AgBottomSheetComponent', () => {
  let component: AgBottomSheetComponent;
  let fixture: ComponentFixture<AgBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgBottomSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
