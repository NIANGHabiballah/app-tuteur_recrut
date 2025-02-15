import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { MesCandidaturesComponent } from './Pages/mes-candidatures/mes-candidatures.component';
import { MonDossierComponent } from './Pages/mon-dossier/mon-dossier.component';

export const routes: Routes = [
    { path: '', redirectTo: '/connexion', pathMatch: 'full' },  // Pour afficher la page de connexion par défaut
    { path: 'connexion', component: ConnexionComponent }, // Ajoutez la route pour le composant connexion
    { path: 'accueil', component: AccueilComponent }, // Ajoutez la route pour le composant Accueil
    { path: 'mes-candidatures', component: MesCandidaturesComponent },
    { path: 'mon-dossier', component: MonDossierComponent },
    { path: '**', redirectTo: '/connexion' }

  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
