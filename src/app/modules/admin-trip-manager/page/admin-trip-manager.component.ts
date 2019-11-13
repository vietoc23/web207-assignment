import { Component, OnInit, NgModule } from '@angular/core';
import { TripPackageData } from "../../../data/schema/mock-data/TripPackageData";

@Component({
  selector: 'app-admin-trip-manager',
  templateUrl: './admin-trip-manager.component.html',
  styleUrls: ['./admin-trip-manager.component.scss']
})
export class AdminTripManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  trips = TripPackageData;

  deleteTrip (id: number) {
    console.log(id);

    this.trips = this.trips.filter(trip => trip.id != id);
  }
}
