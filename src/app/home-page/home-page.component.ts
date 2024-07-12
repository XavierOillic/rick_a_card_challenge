import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../model/card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  playButton: string = 'CLICK TO PLAY : DISPLAY A CARD!';
  buttonDisabled: Boolean = false;

  constructor(private cardService: CardService) {}

  cardToDiplay!: Card;

  //******* */ COUNTDOWN FROM 60 SECONDS TO 0. ***********

  countdown: number = 10; // Set the initial countdown value (in seconds)
  interval: any;
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

  // méthode du bouton : affiche et store in localStorage.
  displayTheCard() {
    if (this.countdown > 0) {
      this.buttonDisabled == true;
    }
    if (this.countdown == 0) {
      this.cardService.getOneCard().subscribe((dataCard) => {
        console.log("Affichage d'une carte => ", dataCard);
        this.cardToDiplay = dataCard;
        this.cardService.setCardStringify('picked up Card', dataCard);
      });
    } else if (this.cardToDiplay) {
      this.buttonDisabled == true && this.startCountdown();
    }
  }

  ngOnInit(): void {
    if (this.cardToDiplay) {
      this.startCountdown();
    }
  }
}

/*
displayTheCard() {
    this.cardService.getOneCard().subscribe((dataCard) => {
      console.log("Affichage d'une carte => ", dataCard);
      this.cardToDiplay = dataCard;
      this.cardService.setCardStringify('picked up Card', dataCard);
    });
  }

  displayTheCard() {
    if (this.countdown > 0) {
      this.cardToDiplay == null;
    } else {
      this.cardService.getOneCard().subscribe((dataCard) => {
        console.log("Affichage d'une carte => ", dataCard);
        this.cardToDiplay = dataCard;
        this.cardService.setCardStringify('picked up Card', dataCard);
        this.startCountdown();
      });
    }
  }
*/
