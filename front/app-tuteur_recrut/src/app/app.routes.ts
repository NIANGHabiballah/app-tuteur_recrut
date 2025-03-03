import { Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { MesCandidaturesComponent } from './Pages/mes-candidatures/mes-candidatures.component';
import { MonDossierComponent } from './Pages/mon-dossier/mon-dossier.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PostulerComponent } from './Pages/postuler/postuler.component';
import { PostesComponent } from './Pages/postes/postes.component';

export const routes: Routes = [
    { path: '', component: ConnexionComponent },
    { path: 'connexion', component: ConnexionComponent }, // Ajoutez la route pour le composant connexion
    { path: 'accueil', component: AccueilComponent }, // Ajoutez la route pour le composant Accueil
    { path: 'inscription', component: InscriptionComponent },
    { path: '', redirectTo: 'connexion', pathMatch: 'full' },  // Pour afficher la page de connexion par défaut
    { path: '*', component: ConnexionComponent },
    { path: 'mes-candidatures', component: MesCandidaturesComponent },
    { path: 'mon-dossier', component: MonDossierComponent },
    { path: 'postuler', component: PostulerComponent },
    { path: 'postes', component: PostesComponent },

  ];