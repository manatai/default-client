import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgProgressSpinnerComponent } from './ag-progress-spinner.component';

describe('AgProgressSpinnerComponent', () => {
  let component: AgProgressSpinnerComponent;
  let fixture: ComponentFixture<AgProgressSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgProgressSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
