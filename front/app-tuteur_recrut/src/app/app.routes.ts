import { Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {DossierComponent} from './dossier/dossier.component';
import {CandidatureComponent} from './candidature/candidature.component';
import {AccueilComponent} from './accueil/accueil.component';

export const routes: Routes = [
  { path: '', component: InscriptionComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: 'dossier', component: DossierComponent },
  { path: 'candidature', component: CandidatureComponent }


];
