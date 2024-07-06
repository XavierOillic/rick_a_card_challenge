import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent {
  @Input() iconName:
    | 'trash'
    | 'heart'
    | 'heart-fill'
    | 'sun'
    | 'sun-fill'
    | 'droplet'
    | 'pencil'
    | 'x-circle'
    | 'droplet-fill' = 'heart';

  @Input() iconColor = 'yellow';
  @Input() iconSize: number = 2;
}
