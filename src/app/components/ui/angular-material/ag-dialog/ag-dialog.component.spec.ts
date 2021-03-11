import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgDialogComponent } from './ag-dialog.component';

describe('AgDialogComponent', () => {
  let component: AgDialogComponent;
  let fixture: ComponentFixture<AgDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
