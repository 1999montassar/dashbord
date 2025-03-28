import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Ajoute Router ici
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule, FormsModule, RouterLink],  // Ajoute FormsModule ici
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';  // Remplace email par username
  password: string = '';

  constructor(private router: Router) {}  // Injecte Router dans le constructeur

  onSubmit() {
    if (this.username && this.password) {  // Utilise username ici
      console.log('Login Data:', { username: this.username, password: this.password });
      this.router.navigate(['/home']);  // Redirige vers la page d'accueil après connexion réussie
    } else {
      console.log('Veuillez remplir tous les champs.');
    }
  }
}
