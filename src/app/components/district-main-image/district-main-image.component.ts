import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-district-main-image',
  standalone: true,
  imports: [],
  templateUrl: './district-main-image.component.html',
  styleUrl: './district-main-image.component.scss'
})
export class DistrictMainImageComponent {
 @Input() districtData:any;
}
