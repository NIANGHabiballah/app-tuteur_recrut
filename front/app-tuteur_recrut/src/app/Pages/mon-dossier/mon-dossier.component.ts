import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  selector: 'app-mon-dossier',
  imports: [RouterModule, NavigationComponent],
  templateUrl: './mon-dossier.component.html',
  styleUrl: './mon-dossier.component.css'
})
export class MonDossierComponent {

}
