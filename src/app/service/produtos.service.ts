import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Produto {
     id: number;
     title: string;
     price: number;
     description: string;
     category: string;
     image: string;
     rating: { rate: number; count: number };
}

@Injectable({
     providedIn: 'root',
})
export class ProdutosService {
     private url = 'https://fakestoreapi.com/products';
     produtos: Produto[] = [];

     constructor(private http: HttpClient) { }
     getProdutos() {
          return this.http.get<Produto[]>(this.url);
     }
}
