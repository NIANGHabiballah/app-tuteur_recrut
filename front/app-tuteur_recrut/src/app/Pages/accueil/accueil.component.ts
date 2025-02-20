import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from "../navigation/navigation.component";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OffreService } from './services/offre.service';
import { OffrePopupComponent } from './offre-popup/offre-popup.component';
import { Offre } from './models/offre.model';
import { OffreDetailsComponent } from './offre-details/offre-details.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-accueil',
  imports: [RouterModule, NavigationComponent, CommonModule, MatCardModule, MatButtonModule, MatDialogModule, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  offres: Offre[] = [];

  constructor(private offreService: OffreService, public dialog: MatDialog) {
    this.offres = this.offreService.getOffres();
  }

  openPopup(offreId: number) {
    const offre = this.offreService.getOffreById(offreId);
    this.dialog.open(OffrePopupComponent, {
      data: offre
    });
  }
 
  openDetailsPopup(offre: Offre) {
    this.dialog.open(OffreDetailsComponent, {
      data: offre,
      width: '800px', // Largeur du popup
      maxHeight: '80vh' // Hauteur maximale du popup
    });
  }
}