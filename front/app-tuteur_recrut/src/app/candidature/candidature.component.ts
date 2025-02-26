import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  styleUrls: ['./candidature.component.css'],
  standalone: true
})
export class CandidatureComponent {

  }

