import { Component, OnInit, Input, input,   } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent  implements OnInit {
  constructor() { }
  @Input() restaurant : any;
  ngOnInit() {

  
  
  }

  getCuisine(cuisine){
    return cuisine.join(', ');
  }

}


