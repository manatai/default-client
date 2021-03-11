import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgChipsComponent } from './ag-chips.component';

describe('AgChipsComponent', () => {
  let component: AgChipsComponent;
  let fixture: ComponentFixture<AgChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
