import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/data/schema/TripService';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.scss']
})
export class FeatureItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  featureItem: TripService = {
    name: `Relaxation in the Local Beach Campfire`,
    desc: 'Lorem ipsum dolor sit amet, consecter adipisicing elit, sed do eiusmod tempor incididunt.',
    image: "assets/img/service/s2.png"
  }

}
