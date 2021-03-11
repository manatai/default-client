import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgLayoutComponent } from './ag-layout.component';

describe('AgLayoutComponent', () => {
  let component: AgLayoutComponent;
  let fixture: ComponentFixture<AgLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
