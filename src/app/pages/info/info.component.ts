import { AfterViewInit, Component } from '@angular/core';
declare var anime: any; 
@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    debugger
    const textWrapper = document.querySelector('.an-1');
    if(!textWrapper || !textWrapper.innerHTML || !textWrapper.textContent) return;
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
  }


  info = 'The vibrant Indian restaurant has been a culinary landmark for over 20 years. Celebrated for its authentic flavors and traditional cooking techniques, this family-run establishment offers a rich tapestry of tastes that transport diners straight to the bustling streets of India. With a commitment to using fresh ingredients and a menu that caters to both vegetarians and meat lovers alike, it continues to be a favorite among locals and tourists seeking a genuine Indian dining experience'
  event = `Toute l'équipe du restaurant MAIHAK est à  votre disposition pour organiser ou participer à vos événements.
            Chez vous, au restaurant, dans votre entreprise ou dans un lieu que vous choisirez.
            Que ce soit mariage, baptême, soirée entre collègues ou en famille, départ en retraite.
            Nous pouvons vous conseiller et organiser pour vous avec nos partenaires (spectacle de danse indienne, décoration indienne, vaisselle, tables et chaises, musique ... )`
}
