import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgForOf
  ],
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {
  postulerForm!: FormGroup;
  step = 1;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.postulerForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      telephone: ['', Validators.required],
      telephoneSecondaire: [''],
      email: ['', [Validators.required, Validators.email]],
      nationalite: ['', Validators.required],
      paysResidence: ['', Validators.required],
      villeResidence: ['', Validators.required],
      adresse: ['', Validators.required],

      // 🆕 Formations
      formations: this.fb.array([
        this.fb.group({
          diplome: ['', Validators.required],
          etablissement: ['', Validators.required],
          anneeObtention: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]]
        })
      ]),

      // 🆕 Expériences professionnelles
      experiences: this.fb.array([
        this.fb.group({
          poste: ['', Validators.required],
          entreprise: ['', Validators.required],
          dateDebut: ['', Validators.required],
          dateFin: [''],
          description: ['']
        })
      ]),

      // 🆕 Documents
      documents: this.fb.group({
        cv: [null, Validators.required],
        lettreMotivation: [null, Validators.required],
        diplome: [null, Validators.required]
      })
    });
  }

// Récupérer le tableau de formations
  get formations() {
    return this.postulerForm.get('formations') as FormArray;
  }

// Ajouter une nouvelle formation
  ajouterFormation() {
    this.formations.push(this.fb.group({
      diplome: ['', Validators.required],
      etablissement: ['', Validators.required],
      anneeObtention: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]]
    }));
  }

// Supprimer une formation
  supprimerFormation(index: number) {
    this.formations.removeAt(index);
  }

  // Récupérer le tableau des expériences
  get experiences() {
    return this.postulerForm.get('experiences') as FormArray;
  }

// Ajouter une nouvelle expérience
  ajouterExperience() {
    this.experiences.push(this.fb.group({
      poste: ['', Validators.required],
      entreprise: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: [''],
      description: ['']
    }));
  }

// Supprimer une expérience
  supprimerExperience(index: number) {
    this.experiences.removeAt(index);
  }

  // Gestion des fichiers uploadés
  onFileSelected(event: any, type: string) {
    const file = event.target.files[0];
    if (file) {
      this.postulerForm.get('documents')?.patchValue({ [type]: file });
    }
  }

// Télécharger un fichier (ex: CV)
  telechargerDocument(type: string) {
    const file = this.postulerForm.get('documents')?.get(type)?.value;
    if (file) {
      const url = URL.createObjectURL(file);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }


  suivant(): void {
    if (this.step < 5) this.step++;
  }

  precedent(): void {
    if (this.step > 1) this.step--;
  }

  soumettre(): void {
    if (this.postulerForm.valid) {
      console.log('Données du formulaire :', this.postulerForm.value);
      alert('Candidature envoyée avec succès !');
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }
}
