import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgToolbarComponent } from './ag-toolbar.component';

describe('AgToolbarComponent', () => {
  let component: AgToolbarComponent;
  let fixture: ComponentFixture<AgToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
