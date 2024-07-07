import { Component, Input, OnInit } from '@angular/core';
import { CardService } from 'src/app/card.service';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  constructor(private cardService: CardService) {}

  @Input() title: string = '';
  cardToDiplay: Card[] = [];
  idCard!: number;

  displayCard() {
    this.cardService.getOneCard().subscribe((dataCard) => {
      console.log("Affichage d'une carte =>", dataCard);
      this.cardToDiplay = [...dataCard];
    });
  }

  ngOnInit(): void {}
}
