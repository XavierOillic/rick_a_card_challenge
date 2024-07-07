import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './model/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  urlApi: string = 'https://rickandmortyapi.com/api/character/0,1,2,3,4,5';
  idCard!: number[];
  //METTRE UN RANDOM NUMERIQUE DE 0 à 386. ET l'INSERER DANS LA VARIABLE URL ??!

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.urlApi);
  }

  getOneCard(): Observable<Card[]> {
    //return this.http.get<Card[]>(`]this.urlApi/${this.idCard}`);
    return this.http.get<Card[]>(`]this.urlApi`);
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
