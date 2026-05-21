import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonIcon, IonCard} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { schoolOutline, peopleOutline, locationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonButton,IonHeader, IonToolbar, IonTitle, IonContent, RouterLink, IonImg, IonIcon, IonCard],
})
export class Tab1Page {
  constructor() {
     addIcons({ schoolOutline, peopleOutline, locationOutline })
  }
}
