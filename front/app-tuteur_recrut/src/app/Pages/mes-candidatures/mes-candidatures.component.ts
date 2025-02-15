import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  selector: 'app-mes-candidatures',
  imports: [RouterModule, NavigationComponent],
  templateUrl: './mes-candidatures.component.html',
  styleUrl: './mes-candidatures.component.css'
})
export class MesCandidaturesComponent {

}
