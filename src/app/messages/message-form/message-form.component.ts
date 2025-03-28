import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-message-form',
  standalone: true,  // Assurez-vous que le composant est standalone si vous l'utilisez ainsi
  imports: [CommonModule, ReactiveFormsModule],  // Ajoutez ReactiveFormsModule et CommonModule ici
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent {
  messageForm: FormGroup;
  messages: { sender: string, content: string }[] = [];  // Liste des messages de la discussion

  constructor(private fb: FormBuilder) {
    // Création du formulaire avec validation
    this.messageForm = this.fb.group({
      message: ['', [Validators.required]]  // Champ pour le message
    });
  }

  // Méthode pour envoyer un message
  envoyerMessage() {
    if (this.messageForm.valid) {
      const newMessage = {
        sender: 'Moi',  // Utilisateur courant
        content: this.messageForm.value.message
      };

      this.messages.push(newMessage);  // Ajouter le message dans la liste

      this.messageForm.reset();  // Réinitialiser le champ de saisie du message
    }
  }

  // Méthode pour annuler le message et vider le formulaire
  annulerMessage() {
    this.messageForm.reset();  // Réinitialiser le champ de saisie du message
  }
}
