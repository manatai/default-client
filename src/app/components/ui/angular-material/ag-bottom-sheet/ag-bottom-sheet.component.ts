

import {Component} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

/**
 * @title Bottom Sheet Overview
 */
@Component({
  selector: 'app-ag-bottom-sheet',
  templateUrl: './ag-bottom-sheet.component.html',
  styleUrls: ['./ag-bottom-sheet.component.css']
})
export class AgBottomSheetComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(AgBottomSheetExampleSheet);
  }
}

@Component({
  selector: 'app-ag-bottom-sheet-example-sheet',
  templateUrl: 'app-ag-bottom-sheet-example-sheet.html',
})


export class AgBottomSheetExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<AgBottomSheetExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */