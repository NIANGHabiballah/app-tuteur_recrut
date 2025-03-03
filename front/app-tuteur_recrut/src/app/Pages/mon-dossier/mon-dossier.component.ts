import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from "../navigation/navigation.component";
import { FooterComponent } from "../footer/footer.component";
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-mon-dossier',
  imports: [RouterModule, FormsModule, NavigationComponent, FooterComponent],
  templateUrl: './mon-dossier.component.html',
  styleUrl: './mon-dossier.component.css'
})
export class MonDossierComponent {
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

