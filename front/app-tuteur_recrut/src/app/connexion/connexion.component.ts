import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Router, RouterLink, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from "../Pages/navigation/navigation.component";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink, NavigationComponent] // 🔥 Ajout de ReactiveFormsModule ici
 // 🔥 Ajout de ReactiveFormsModule ici
})
export class ConnexionComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulaire soumis', this.loginForm.value);
    }
  }
}
