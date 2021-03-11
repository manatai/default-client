import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-ag-button-toggle',
  templateUrl: './ag-button-toggle.component.html',
  styleUrls: ['./ag-button-toggle.component.css']
})
export class AgButtonToggleComponent implements OnInit {

  constructor() { }

  fontStyleControl = new FormControl();
  fontStyle?: string;

  ngOnInit(): void {
  }

}
