import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink, UrlTree} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-offre-details',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './offre-details.component.html',
  styleUrl: './offre-details.component.css'
})
export class OffreDetailsComponent {

  offre: any;
  offres = [
    { id: 1, titre: 'Enseignant chercheur en Droit public', niveau: 'Doctorat', specialite: 'Sciences Juridiques', dateCloture: '15/06/2023', description: 'Description du poste en Droit public...' },
    { id: 2, titre: 'Enseignant chercheur en Géographie', niveau: 'Doctorat', specialite: 'Sciences Politiques', dateCloture: '15/06/2023', description: 'Description du poste en Géographie...' },
    { id: 3, titre: 'Enseignant chercheur en Finance-Comptabilité', niveau: 'Doctorat', specialite: 'Sciences de Gestion', dateCloture: '15/06/2023', description: 'Description du poste en Finance...' }
  ];
  offreId: any[] | string | UrlTree | null | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Récupérer l'ID depuis l'URL
    this.offre = this.offres.find(o => o.id === id); // Trouver l'offre correspondante
  }
}
