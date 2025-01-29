import { Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';

export const routes: Routes = [
    { path: '', redirectTo: '/connexion', pathMatch: 'full' },  // Pour afficher la page de connexion par défaut
    { path: 'connexion', component: ConnexionComponent }, // Ajoutez la route pour le composant connexion
  ];
