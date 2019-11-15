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
    id: 1,
    start_date: 18,
    start_month: 'May',
    start_location: 'Hanoi',
    trip_length: '6 days 5 nights',
    package_name: 'Hanoi homestay in old quarters',
    desc: `Oh, pleased to meet you, Calvin Marty Klein. Do you mind if I sit here? Hey Marty, I'm not your answering service, but you're outside pouting about the car, Jennifer Parker called you twice. Uh listen, do you know where Riverside Drive is? Right. And where's my reports?`,
    image: 'assets/img/places/p1.jpg'
  };

}
