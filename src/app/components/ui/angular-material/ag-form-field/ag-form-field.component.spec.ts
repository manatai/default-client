import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgFormFieldComponent } from './ag-form-field.component';

describe('AgFormFieldComponent', () => {
  let component: AgFormFieldComponent;
  let fixture: ComponentFixture<AgFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
