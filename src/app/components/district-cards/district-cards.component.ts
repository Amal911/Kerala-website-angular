import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-district-cards',
  standalone: true,
  imports: [],
  templateUrl: './district-cards.component.html',
  styleUrl: './district-cards.component.scss'
})
export class DistrictCardsComponent {
  @Input() cardData:any;
  ngOnInit(){
    console.log(this.cardData);
    
  }
}
