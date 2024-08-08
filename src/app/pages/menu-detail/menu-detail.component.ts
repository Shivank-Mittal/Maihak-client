import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { menuItem } from '../menu/menu-type';
import { CurrencyPipe } from '@angular/common';
declare var anime: any; 
@Component({
  selector: 'app-menu-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './menu-detail.component.html',
  styleUrl: './menu-detail.component.scss'
})
export class MenuDetailComponent implements OnInit, OnChanges {
  @Input() selectedMenuDetails!: menuItem[];
  animateValue?:any;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['selectedMenuDetails']) {
      this.animate();
    }
  }
  ngOnInit(): void {
    if(anime) {
      this.animateValue = anime({
        targets: '.wrapper',
        translateX: 250,
        direction: 'reverse',
        easing: 'easeInOutSine'
      });
    }
  }

  animate() {
    if(this.animateValue) {
      this.animateValue.restart()
    }
  }

}
