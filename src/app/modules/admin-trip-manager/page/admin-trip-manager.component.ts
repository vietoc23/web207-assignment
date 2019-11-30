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
    this.tripPackageService.getTripPackages().subscribe(data => {
      this.trips = data;

    });
  }

  editTrip(id: number) {

  }

  deleteTrip(id: number) {
    this.tripPackageService.deleteTripPackage(id).subscribe(data => {
      this.trips = this.trips.filter(trip => trip.id != data.id);
      this.getTripPackages();
    });
  }
}
