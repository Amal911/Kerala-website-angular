import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { districts } from '../../data';
import { KeyValuePipe, NgFor } from '@angular/common';
import { CardsComponent } from '../../components/cards/cards.component';
import { DistrictCardsComponent } from '../../components/district-cards/district-cards.component';

@Component({
  selector: 'app-all-districts',
  standalone: true,
  imports: [RouterLink,NgFor,KeyValuePipe,DistrictCardsComponent],
  templateUrl: './all-districts.component.html',
  styleUrl: './all-districts.component.scss'
})
export class AllDistrictsComponent {
  districts:any ;
  ngOnInit(){
    this.districts= districts.districts;
    console.log(districts);
    
  }
  getObjectKeys() {
    return Object.keys(this.districts);
  }
}
