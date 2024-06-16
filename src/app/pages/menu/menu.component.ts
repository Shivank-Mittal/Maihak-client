import { Component } from '@angular/core';
import { MenuCardComponent } from '../../components/menu-card/menu-card.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuCardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
