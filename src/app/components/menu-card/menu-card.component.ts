import { Component, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.scss'
})
export class MenuCardComponent {
  @Input() imgSrc = '';
  @Input() name = '';

  backupImage = '../../../assets/images/food/spices.jpg';

  handleImageError(event: any) {
    event.target.src = this.backupImage;
  }

}
