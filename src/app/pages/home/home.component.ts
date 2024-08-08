import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { InfoComponent } from '../info/info.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainComponent, WelcomePageComponent, InfoComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
