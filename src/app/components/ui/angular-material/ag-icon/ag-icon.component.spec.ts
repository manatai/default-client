import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgIconComponent } from './ag-icon.component';

describe('AgIconComponent', () => {
  let component: AgIconComponent;
  let fixture: ComponentFixture<AgIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
