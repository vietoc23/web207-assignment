import { Component, OnInit, NgModule } from '@angular/core';
import { TripPackage } from 'src/app/data/schema/TripPackage';
import { TripPackageService } from 'src/app/data/service/trip-package.service';

@Component({
  selector: 'app-admin-trip-manager',
  templateUrl: './admin-trip-manager.component.html',
  styleUrls: ['./admin-trip-manager.component.scss']
})
export class AdminTripManagerComponent implements OnInit {
  trips: TripPackage[];

  constructor(private tripPackageService: TripPackageService) {}

  ngOnInit() {
    this.getTripPackages();
  }

  getTripPackages(): void {
    this.trips = this.tripPackageService.getTripPackages();
  }

  deleteTrip (id: number) {
    console.log(id);

    this.trips = this.tripPackageService.deleteTripPackage(id);
  }
}
