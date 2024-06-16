import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {

  welcomTitle = 'Welcome to '
  welcomeText = `Dans notre restaurant vous ferez connaissance, si nous n'y êtes pas déjà familiarisé, avec la cuisine du nord de l'inde.
Vous y trouverez accueil, sourire et amitié qui se traduisent en langue indienne par MAIHAK.
Vous trouverez une saveur nouvelle au poulet, à l'agneau, aux poissons et crevettes, au biryani préparé avec 25 épices dont les fameux curry, les grillades au tandoor (four en terre cuite au charbon de bois), différemment préparés et l'exceptionnel riz basmati s'accomodant avec tous les plats.

`

}
