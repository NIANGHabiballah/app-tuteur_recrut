// @ts-ignore
import { Component } from '@angular/core';
// @ts-ignore
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

// @ts-ignore
@Component({ 
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  imports: [
    ReactiveFormsModule
  ],
  standalone: true,
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Data:', this.registrationForm.value);
    }
  }
}

