import { Component } from '@angular/core';
declare var anime:any;
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    anime({
      targets: '.name',
      translateX: 250,
      direction: 'reverse',
      easing: 'easeInOutSine'
    });

    anime({
      targets: '.restaurant-type',
      translateX: -250,
      direction: 'reverse',
      easing: 'easeInOutSine'
    });
  }

}
