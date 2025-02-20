import { Injectable } from '@angular/core';
import { Offre } from '../models/offre.model';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  private offres: Offre[] = [
    {
      id: 1,
      titre: 'TUTEUR EN INFOGRAPHIE',
      postes: 0,
      dateCloture: '2025-03-01',
      details: 'Détails de l\'offre 1',
      prerequis: 'Prérequis pour le poste de Tuteur en Infographie',
      competences: 'Compétences requises pour le poste de Tuteur en Infographie'
    },
    {
      id: 2,
      titre: 'TUTEUR EN INFORMATIQUE',
      postes: 8,
      dateCloture: '2025-04-01',
      details: 'Détails de l\'offre 2',
      prerequis: 'Prérequis pour le poste de Tuteur en Informatique',
      competences: 'Compétences requises pour le poste de Tuteur en Informatique'
    },
    {
      id: 3,
      titre: 'TUTEUR EN COM DIGITALE',
      postes: 5,
      dateCloture: '2025-05-01',
      details: 'Détails de l\'offre 3',
      prerequis: 'Prérequis pour le poste de Tuteur en Communication Digitale',
      competences: 'Compétences requises pour le poste de Tuteur en Communication Digitale'
    },
    {
      id: 4,
      titre: 'TUTEUR EN MARKETING',
      postes: 3,
      dateCloture: '2025-06-01',
      details: 'Détails de l\'offre 4',
      prerequis: 'Prérequis pour le poste de Tuteur en Marketing',
      competences: 'Compétences requises pour le poste de Tuteur en Marketing'
    },
    {
      id: 5,
      titre: 'TUTEUR EN FINANCE',
      postes: 2,
      dateCloture: '2025-07-01',
      details: 'Détails de l\'offre 5',
      prerequis: 'Prérequis pour le poste de Tuteur en Finance',
      competences: 'Compétences requises pour le poste de Tuteur en Finance'
    },
    {
      id: 6,
      titre: 'TUTEUR EN RESSOURCES HUMAINES',
      postes: 4,
      dateCloture: '2025-08-01',
      details: 'Détails de l\'offre 6',
      prerequis: 'Prérequis pour le poste de Tuteur en Ressources Humaines',
      competences: 'Compétences requises pour le poste de Tuteur en Ressources Humaines'
    },
    {
      id: 7,
      titre: 'TUTEUR EN GESTION DE PROJET',
      postes: 6,
      dateCloture: '2025-09-01',
      details: 'Détails de l\'offre 7',
      prerequis: 'Prérequis pour le poste de Tuteur en Gestion de Projet',
      competences: 'Compétences requises pour le poste de Tuteur en Gestion de Projet'
    },
    {
      id: 8,
      titre: 'TUTEUR EN COMMUNICATION',
      postes: 1,
      dateCloture: '2025-10-01',
      details: 'Détails de l\'offre 8',
      prerequis: 'Prérequis pour le poste de Tuteur en Communication',
      competences: 'Compétences requises pour le poste de Tuteur en Communication'
    },
    {
      id: 9,
      titre: 'TUTEUR EN COMMUNICATION',
      postes: 0,
      dateCloture: '2025-10-01',
      details: 'Détails de l\'offre 8',
      prerequis: 'Prérequis pour le poste de Tuteur en Communication',
      competences: 'Compétences requises pour le poste de Tuteur en Communication'
    }
    // Ajoutez d'autres offres ici
  ];

  getOffres(): Offre[] {
    return this.offres;
  }

  getOffreById(id: number): Offre | undefined {
    return this.offres.find(offre => offre.id === id);
  }
}