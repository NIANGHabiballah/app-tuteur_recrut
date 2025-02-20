import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from "../navigation/navigation.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-mes-candidatures',
  imports: [RouterModule, NavigationComponent, FooterComponent],
  templateUrl: './mes-candidatures.component.html',
  styleUrl: './mes-candidatures.component.css'
})
export class MesCandidaturesComponent {

}
