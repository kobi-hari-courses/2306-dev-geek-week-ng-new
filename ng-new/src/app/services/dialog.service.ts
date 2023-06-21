import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../components/my-dialog/my-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matDialog: MatDialog) { }

  openMyDialog() {
    this.matDialog.open(MyDialogComponent, {
      
    });

  }
}
