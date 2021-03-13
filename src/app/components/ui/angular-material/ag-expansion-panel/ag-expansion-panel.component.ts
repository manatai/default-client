import { Component, ViewChild, OnInit } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
@Component({
  selector: 'app-ag-expansion-panel',
  templateUrl: './ag-expansion-panel.component.html',
  styleUrls: ['./ag-expansion-panel.component.css']
})
export class AgExpansionPanelComponent implements OnInit {

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


}
