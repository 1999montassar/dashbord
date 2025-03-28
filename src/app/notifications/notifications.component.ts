import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  imports: [CommonModule],
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: string[] = [
    'Nouveau message reçu.',
    'Votre profil a été mis à jour.',
    'Nouvelle mise à jour disponible.'
  ];

  constructor() { }

  ngOnInit(): void { }
}
