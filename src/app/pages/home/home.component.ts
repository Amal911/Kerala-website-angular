import { Component } from '@angular/core';
import keralaData from '../../data';
import { CarouselComponent } from '../../components/carousel/carousel.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
data = keralaData;
ngOnInit(){
  console.log(keralaData);
  
}
}
