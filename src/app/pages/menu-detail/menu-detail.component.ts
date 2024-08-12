import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { menuItem } from '../menu/menu-type';
import { CurrencyPipe } from '@angular/common';
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
      // this.animate();
    }
  }
  ngOnInit(): void {
  }

}
