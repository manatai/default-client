import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgSelectComponent } from './ag-select.component';

describe('AgSelectComponent', () => {
  let component: AgSelectComponent;
  let fixture: ComponentFixture<AgSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
