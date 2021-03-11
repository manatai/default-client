import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgSidenavComponent } from './ag-sidenav.component';

describe('AgSidenavComponent', () => {
  let component: AgSidenavComponent;
  let fixture: ComponentFixture<AgSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
