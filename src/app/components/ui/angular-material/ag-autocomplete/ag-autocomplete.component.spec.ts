import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgAutocompleteComponent } from './ag-autocomplete.component';

describe('AgAutocompleteComponent', () => {
  let component: AgAutocompleteComponent;
  let fixture: ComponentFixture<AgAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgAutocompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
