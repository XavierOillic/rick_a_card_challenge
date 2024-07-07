import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './model/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  min: number = 0;
  max: number = 826;
  idCard!: number;
  getRandomCard(min: number, max: number) {
    this.idCard = Math.floor(Math.random() * (max - min) + min);
    console.log(this.idCard);
    return this.idCard;
  }

  urlApi = 'https://rickandmortyapi.com/api/character';

  getOneCard(): Observable<Card[]> {
    this.getRandomCard(this.min, this.max);
    return this.http.get<Card[]>(`${this.urlApi}/${this.idCard}`);
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
