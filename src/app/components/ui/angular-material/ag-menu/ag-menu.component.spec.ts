import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgMenuComponent } from './ag-menu.component';

describe('AgMenuComponent', () => {
  let component: AgMenuComponent;
  let fixture: ComponentFixture<AgMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
