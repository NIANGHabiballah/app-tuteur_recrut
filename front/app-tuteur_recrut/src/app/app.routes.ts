import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { MesCandidaturesComponent } from './Pages/mes-candidatures/mes-candidatures.component';
import { MonDossierComponent } from './Pages/mon-dossier/mon-dossier.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PostulerComponent } from './Pages/postuler/postuler.component';
import { PostesComponent } from './Pages/postes/postes.component';

export const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
    { path: 'connexion', component: ConnexionComponent }, // Ajoutez la route pour le composant connexion
    { path: 'inscription', component: InscriptionComponent },
    { path: 'accueil', component: AccueilComponent }, // Ajoutez la route pour le composant Accueil
    { path: 'postes', component: PostesComponent },
    { path: 'mes-candidatures', component: MesCandidaturesComponent },
    { path: 'mon-dossier', component: MonDossierComponent },
    { path: 'postuler', component: PostulerComponent },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }