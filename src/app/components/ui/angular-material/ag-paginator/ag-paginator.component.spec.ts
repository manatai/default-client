import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgPaginatorComponent } from './ag-paginator.component';

describe('AgPaginatorComponent', () => {
  let component: AgPaginatorComponent;
  let fixture: ComponentFixture<AgPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
