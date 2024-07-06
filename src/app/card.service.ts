import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './model/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>('https://rickandmortyapi.com/api/character');
  }

  card!: string;
  a!: string;
  b!: string;

  setCardInLs(a: any, b: any) {
    localStorage.setItem(a, b);
  }
  setCardStringify(a: any, b: any) {
    JSON.stringify(localStorage.setItem(a, b));
  }

  myCard!: any;
  getCardFromLs() {
    const dataFromLs = localStorage.getItem('card');
    if (dataFromLs) {
      this.myCard = dataFromLs;
    }
    return this.myCard;
  }
}
