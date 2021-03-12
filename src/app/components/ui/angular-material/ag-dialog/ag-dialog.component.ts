import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'app-ag-dialog',
  templateUrl: './ag-dialog.component.html',
  styleUrls: ['./ag-dialog.component.css']
})
export class AgDialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AgDialogBoxComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'ag-dialog-box',
  templateUrl: 'ag-dialog-box.html',
})
export class AgDialogBoxComponent {}
