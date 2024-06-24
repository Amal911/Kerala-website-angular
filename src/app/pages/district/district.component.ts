import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import keralaData, { DistType, DistrictType, districts } from '../../data';
import { DistrictMainImageComponent } from '../../components/district-main-image/district-main-image.component';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-district',
  standalone: true,
  imports: [DistrictMainImageComponent,CardsComponent],
  templateUrl: './district.component.html',
  styleUrl: './district.component.scss'
})


export class DistrictComponent {
  constructor(private activatedRoute: ActivatedRoute){}
  
  districtName:string ="";   
  data:DistType = keralaData.districts[0];
  newdata:any;
  districtData:any ;
 
  ngOnInit(): void {
     this.districtName = this.activatedRoute.snapshot.paramMap.get('id') as string;
     this.newdata = districts.districts;
     this.districtData = this.newdata[this.districtName]
     console.log(this.districtData);
     
    }
  
}
