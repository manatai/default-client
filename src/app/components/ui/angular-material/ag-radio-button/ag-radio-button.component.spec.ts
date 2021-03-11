import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgRadioButtonComponent } from './ag-radio-button.component';

describe('AgRadioButtonComponent', () => {
  let component: AgRadioButtonComponent;
  let fixture: ComponentFixture<AgRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgRadioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
