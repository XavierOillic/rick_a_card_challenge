import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './home-page/model/card';

@Injectable({
  providedIn: 'root',
})
export class CardServiceService {
  constructor(private http: HttpClient) {}

  getLaPlants(): Observable<Card[]> {
    return this.http.get<Card[]>('https://rickandmortyapi.com/api/character'); // NOUS PERMET GRACE à ce "FETCH" de récuperer le flux de donnée PLAntes
  }
}
