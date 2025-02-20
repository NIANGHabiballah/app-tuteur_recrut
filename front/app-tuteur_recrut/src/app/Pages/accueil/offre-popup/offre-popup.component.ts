import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-offre-popup',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './offre-popup.component.html',
  styleUrls: ['./offre-popup.component.css']
})
export class OffrePopupComponent {
  detailsVisible = false;
  formVisible = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<OffrePopupComponent>
  ) {}

  showDetails() {
    this.detailsVisible = !this.detailsVisible;
  }

  postuler() {
    this.formVisible = !this.formVisible;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}