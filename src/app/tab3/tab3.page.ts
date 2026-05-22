import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { ProdutosService } from '../service/produtos.service';
import { Produto } from '../service/produtos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports:  [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, NgIf, NgFor]
})
export class Tab3Page {
  todos: Produto[] = [];
  mostrar = false;

  constructor(private svc: ProdutosService) {}

  verTodos() {
    this.svc.getProdutos().subscribe(p => {
      this.todos = p;
      this.mostrar = true;
    });
  }
  esconder() {
    this.mostrar = false;
    this.todos = [];
  }
}
