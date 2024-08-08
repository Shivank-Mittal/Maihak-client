import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MenuCardComponent } from '../../components/menu-card/menu-card.component';
import MenuCollection from '../../menu-collection/index';
import {getCollection} from './menu-collection'
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { menuCollection, menuItem } from './menu-type';
import { MenuDetailComponent } from '../menu-detail/menu-detail.component';
import { isPlatformBrowser } from '@angular/common';
declare var window:any


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuCardComponent, MenuCardComponent, CarouselModule, TagModule, ButtonModule, MenuDetailComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{
  
menu: any[] = getCollection();
selectedMenuTitle?: string = MenuCollection[0].type;
selectedMenuDetails: menuItem[] = MenuCollection[0].collection;
menuCollection: menuCollection = MenuCollection;
products: any;
responsiveOptions: any;
menuScrollItemVisible = 6
menuPrice? = 0;

constructor(@Inject(PLATFORM_ID) private platformID: Object) {}

ngOnInit(): void {
  
  if(isPlatformBrowser(this.platformID))  {
    const isMobileMode = window.matchMedia("(max-width: 850px)").matches;
  
    this.menuScrollItemVisible = isMobileMode ? 4: 7
  }

}

  showMenuDetails(menuType: string) {
    this.selectedMenuTitle = this.convertToCaps(menuType);
    const menuDetails = MenuCollection.find(item => item.type.toLocaleLowerCase() === menuType.toLowerCase())?.collection;
    if(menuDetails) {
      this.selectedMenuDetails = menuDetails;
      this.menuPrice = menuDetails[0].type === 'MENU' ? menuDetails[0].price : undefined
      return;
    }
    this.selectedMenuDetails = MenuCollection[0].collection
    this.selectedMenuTitle = MenuCollection[0].type
  }

  convertToCaps(value: string):string {
    return value.split(' ').map(v => v[0].toUpperCase()+v.slice(1)).join(' ')
  }

}
