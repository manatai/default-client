import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgSlideToggleComponent } from './ag-slide-toggle.component';

describe('AgSlideToggleComponent', () => {
  let component: AgSlideToggleComponent;
  let fixture: ComponentFixture<AgSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgSlideToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
