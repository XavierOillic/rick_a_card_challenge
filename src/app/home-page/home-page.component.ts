import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../model/card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  playButton: string = 'CLICK TO PLAY DISPLAY!';
  constructor(private cardService: CardService) {}

  cardToDiplay!: Card;

  displayIf() {}

  // méthode du bouton : affiche et store in localStorage.
  displayTheCard() {
    this.cardService.getOneCard().subscribe((dataCard) => {
      console.log("Affichage d'une carte => ", dataCard);
      this.cardToDiplay = dataCard;
      this.cardService.setCardStringify('picked up Card', dataCard);
    });
  }

  ngOnInit(): void {}
}
