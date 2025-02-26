import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink, UrlTree} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-offre-details',
  imports: [
  ],
  templateUrl: './offre-details.component.html',
  styleUrl: './offre-details.component.css'
})
export class OffreDetailsComponent {

  offre: any;
  offres = [
    { id: 1, titre: 'Enseignant chercheur enAlgorithme Distibués', niveau: 'Doctorat', specialite: 'Algorithme', dateCloture: '30/03/2025', description: 'Description du poste...' },
    { id: 2, titre: 'Enseignant chercheur en Ingénierie Logicielle', niveau: 'Doctorat', specialite: 'Informatique développement logiciel', dateCloture: '30/03/2025', description: 'Description du poste...' },
    { id: 3, titre: 'Enseignant chercheur en Intelligence Artificielle', niveau: 'Doctorat', specialite: 'IA', dateCloture: '30/03/2025', description: 'Description du poste...' }
  ];
  offreId: any[] | string | UrlTree | null | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Récupérer l'ID depuis l'URL
    this.offre = this.offres.find(o => o.id === id); // Trouver l'offre correspondante
  }
}
