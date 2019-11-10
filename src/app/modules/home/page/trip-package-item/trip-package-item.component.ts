import { Component, OnInit } from '@angular/core';
import { TripPackage } from 'src/app/data/schema/TripPackage';

@Component({
  selector: 'app-trip-package-item',
  templateUrl: './trip-package-item.component.html',
  styleUrls: ['./trip-package-item.component.scss']
})
export class TripPackageItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  packageItem: TripPackage = {
    start_date: '08',
    start_month: 'December',
    start_location: 'Stockholmes',
    trip_length: '5 days 6 nights',
    package_name: "Desert Riding Turning So Much Flowery",
    desc: 'Lorem ipsum dolor sit amet, consecter adipisicing elit, sed do eiusmod tempor incididunt.',
    image: "assets/img/package/p1.jpg"
  }

}
