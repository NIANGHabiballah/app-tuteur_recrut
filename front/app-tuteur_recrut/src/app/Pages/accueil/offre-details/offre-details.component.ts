import { Component, Inject, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-offre-details',
  templateUrl: './offre-details.component.html',
  styleUrls: ['./offre-details.component.css']
})
export class OffreDetailsComponent implements AfterViewInit {
  @ViewChild('detailsContainer') detailsContainer!: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<OffreDetailsComponent>
  ) {}

  ngAfterViewInit() {
    if (this.detailsContainer) {
      this.detailsContainer.nativeElement.scrollTop = 0; // Forcer le défilement vers le haut
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}