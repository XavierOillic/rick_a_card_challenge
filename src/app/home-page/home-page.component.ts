import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../model/card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private cardService: CardService) {}

  cardToDiplay!: Card;
  playButton: string = 'CLICK TO PLAY : DISPLAY A CARD!';
  buttonDisabled: Boolean = false;

  canOrCannot!: string;
  atFirst: string = 'At first, you have to pick one card, NOOOOOWWWW !!!!!!';
  canPlay: string = ' So pick one, and wait for :';
  canNotPlay: string = ' You have to wait for : ';

  countdown: number = 10; // Set the initial countdown value (in seconds)
  //interval: any;

  //************************************************************************* */

  ngOnInit(): void {
    this.canOrCannot = this.atFirst;
  }

  //*********** SERVICE METHOD: display and store in localStorage the card *********** */
  serviceDisplay() {
    this.cardService.getOneCard().subscribe((dataCard) => {
      console.log("Affichage d'une carte => ", dataCard);
      this.cardToDiplay = dataCard;
      this.cardService.setCardStringify('picked up Card', dataCard);
    });
  }

  //********************* START COUNTDOWN ******************************************** */

  startCountdown() {
    const interval = setInterval(() => {
      if (this.countdown > 0) {
        this.canOrCannot = this.canNotPlay;
        this.countdown--;
      } else {
        clearInterval(interval);
        this.canOrCannot = this.canPlay;
      }
    }, 1000);
    this.countdown = 10;
  }

  //********************* START TIME STOP ******************************************** */

  timing() {
    this.buttonDisabled = true;
    setTimeout(() => {
      this.buttonDisabled = false; // accompli cette action une fois AU BOUT de 10 secondes.
    }, 10000);
  }

  //***********************  BUTTON ENABLED EACH 10 SECONDS ****************************************** */

  displayTheCard() {
    this.serviceDisplay();
    this.startCountdown();
    this.timing();
  }
}

//************************** EN DESSOUS BROUILLON *************************************** */
/*

setTimeout(() => {
  console.log("Delayed for 10 second.");
  // le code ici est lancé 10 secondes après.
}, "10000");
*/
