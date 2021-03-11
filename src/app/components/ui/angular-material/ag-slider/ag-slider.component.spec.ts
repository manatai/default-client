import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgSliderComponent } from './ag-slider.component';

describe('AgSliderComponent', () => {
  let component: AgSliderComponent;
  let fixture: ComponentFixture<AgSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
