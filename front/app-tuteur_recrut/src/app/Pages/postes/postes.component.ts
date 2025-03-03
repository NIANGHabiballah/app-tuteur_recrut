import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from "../navigation/navigation.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink, RouterModule } from '@angular/router';
import {NgForOf} from '@angular/common';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-postes',
  imports: [RouterModule, NgForOf, RouterLink, NavigationComponent, FooterComponent],
  templateUrl: './postes.component.html',
  styleUrl: './postes.component.css'
})

export class PostesComponent implements OnInit{
  postes = [
    {
      titre: 'Enseignant chercheur en Algorithme Distibués',
      niveau: 'Doctorat',
      specialite: 'Algorithme',
      dateCloture: '30/03/2025'
    },
    {
      titre: 'Enseignant chercheur en Ingénierie Logicielle',
      niveau: 'Doctorat',
      specialite: 'Informatique développement logiciel',
      dateCloture: '30/03/2025'
    },
    {
      titre: 'Enseignant chercheur en Intelligence Artificielle',
      niveau: 'Doctorat',
      specialite: 'IA',
      dateCloture: '30/03/2025'
    }
  ];

  modalInstance: any;

  ngOnInit(): void {
    const modalElement = document.getElementById('offreModal');
    if (modalElement) {
      this.modalInstance = new bootstrap.Modal(modalElement);
    }
  }

  openModal() {
    if (this.modalInstance) {
      this.modalInstance.show();
    }
  }
}


