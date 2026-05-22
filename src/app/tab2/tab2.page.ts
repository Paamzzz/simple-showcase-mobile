import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { ProdutosService } from '../service/produtos.service';
import { Produto } from '../service/produtos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, NgIf]
})
export class Tab2Page {
     produtos: Produto[] = [];
     index = 0;

  get produto() { return this.produtos[this.index]; }
  get isFirst() { return this.index === 0; }
  get isLast()  { return this.index === this.produtos.length - 1; }

  constructor(private svc: ProdutosService) {}

  ngOnInit() {
    this.svc.getProdutos().subscribe(p => this.produtos = p);
  }
  anterior() { if (!this.isFirst) this.index--; }
  proximo()  { if (!this.isLast)  this.index++; }

}
