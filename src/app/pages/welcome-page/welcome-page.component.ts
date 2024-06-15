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
  welcomeText = `In our restaurant you will get to know, if you are not already familiar with it, the cuisine of North India.
You will find welcome, smiles and friendship which are translated into Indian language by MAIHAK.
You will find a new flavor in chicken, lamb, fish and shrimp, biryani prepared with 25 spices including the famous curry, grilled in the tandoor (charcoal earthenware oven), differently prepared and the exceptional basmati rice goes well with all dishes.`

}
