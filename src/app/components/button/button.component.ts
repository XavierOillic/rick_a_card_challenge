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
  @Input() buttonDisabled!: Boolean;

  cardToDiplay: Card[] = [];
  idCard!: number;

  ngOnInit(): void {}
}
