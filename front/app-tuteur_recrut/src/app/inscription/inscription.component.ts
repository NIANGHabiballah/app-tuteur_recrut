import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { NavigationComponent } from "../Pages/navigation/navigation.component";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, NavigationComponent]
})
export class InscriptionComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  inscription() {
    if (this.registerForm.invalid) {
      return;
    }

    this.authService.inscription(this.registerForm.value).subscribe(
      () => {
        alert('Inscription réussie ! Vous allez être redirigé vers la page de connexion.');
        this.router.navigate(['/connexion']); // Rediriger vers la page de connexion
      },
      (error) => {
        this.errorMessage = 'Erreur lors de l’inscription. Veuillez réessayer.';
        console.error('Erreur:', error);
      }
    );
  }

  onSubmit() {

  }
}
