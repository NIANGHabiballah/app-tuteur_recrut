import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  imports: [
    FormsModule,
    RouterLink
  ],
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent {
  nom: string = '';
  genre: string = '';
  diplome: string = '';
  poste: string = '';
  entreprise: string = '';
  fileName: string = '';
  tel: string = '';
  email: string = '';
  nationalite: string ='';
  pays: string = '';
  ville: string = '';
  prenom: string = '';
  ecole: string = '';

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.fileName = event.target.files[0].name;
    }
  }

  logout() {

  }
}
