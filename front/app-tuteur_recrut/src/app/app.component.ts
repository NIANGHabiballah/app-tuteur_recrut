// @ts-ignore
import { Component } from '@angular/core';
// @ts-ignore
import { RouterOutlet } from '@angular/router';
import {InscriptionComponent} from './inscription/inscription.component';

// @ts-ignore
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InscriptionComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-tuteur_recrut';
  private router: any;

  openInscriptionComponent() {
    this.router.navigate(['/inscription']);
  }
}
