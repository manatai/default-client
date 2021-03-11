import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgRipplesComponent } from './ag-ripples.component';

describe('AgRipplesComponent', () => {
  let component: AgRipplesComponent;
  let fixture: ComponentFixture<AgRipplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgRipplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgRipplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
