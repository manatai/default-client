import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgSnackbarComponent } from './ag-snackbar.component';

describe('AgSnackbarComponent', () => {
  let component: AgSnackbarComponent;
  let fixture: ComponentFixture<AgSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgSnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
