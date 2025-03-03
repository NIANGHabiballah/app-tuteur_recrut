import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { NavigationComponent } from "../navigation/navigation.component";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  imports: [
    RouterLink,
    FooterComponent,
    NavigationComponent
],
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent { }
