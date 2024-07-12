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

  countdown: number = 10; // Set the initial countdown value (in seconds)
  //interval: any;

  //************************************************************************* */

  ngOnInit(): void {}

  //*********** SERVICE METHOD: display and store in localStorage the card ***********
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
        this.countdown--;
      } else {
        clearInterval(interval);
        console.log('quesquispass ');
      }
    }, 1000);
    this.countdown = 10;
  }

  //********************* START TIME STOP ******************************************** */

  timing() {
    this.buttonDisabled = true;
    setTimeout(() => {
      this.buttonDisabled = false;
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




  startCountdown() {
    this.interval = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(this.interval);
        //alert('Countdown is over, you can pick one card!');
      }
    }, 1000); // Update the countdown every 1 second (1000 ms)
  }
*/
