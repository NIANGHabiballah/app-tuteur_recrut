import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from "../navigation/navigation.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-mon-dossier',
  imports: [RouterModule, NavigationComponent, FooterComponent],
  templateUrl: './mon-dossier.component.html',
  styleUrl: './mon-dossier.component.css'
})
export class MonDossierComponent {

}
