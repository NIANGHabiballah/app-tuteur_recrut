import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  imports: [
    ReactiveFormsModule,
    NgIf,
    RouterLink
  ],
  styleUrls: ['./candidature.component.css'],
  standalone: true
})
export class CandidatureComponent {
  candidatureForm: FormGroup;
  submitted = false;
  private router: any;

  constructor(private fb: FormBuilder) {
    this.candidatureForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      lieuNaissance: ['', Validators.required],
      nationalite: ['', Validators.required],
      paysResidence: ['', Validators.required],
      experience: ['', [Validators.required, Validators.min(0)]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      cv: [null, Validators.required],
      diplome: [null, Validators.required],
      lettreMotivation: [null, Validators.required]
    });
  }

  onFileChange(event: any, field: string) {
    const file = event.target.files[0];
    this.candidatureForm.patchValue({ [field]: file });
  }

  onSubmit() {
    if (this.candidatureForm.valid) {
      console.log('Formulaire soumis :', this.candidatureForm.value);
      this.submitted = true;
    }
  }

  logout() {
    // Ajouter la logique de déconnexion ici
    console.log('Déconnexion réussie !');
    this.router.navigate(['/login']); // Redirige vers la page de connexion
  }
}
