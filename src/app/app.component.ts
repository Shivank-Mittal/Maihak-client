import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { MenuComponent } from './pages/menu/menu.component';
import { InfoComponent } from './pages/info/info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, MainComponent, WelcomePageComponent, InfoComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mehaik-client';
}
