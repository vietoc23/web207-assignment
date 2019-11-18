import { Component, OnInit } from '@angular/core';
import { TripPackage } from 'src/app/data/schema/TripPackage';
import { ActivatedRoute } from '@angular/router';
import { TripPackageService } from 'src/app/data/service/trip-package.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-trip-update',
  templateUrl: './admin-trip-update.component.html',
  styleUrls: ['./admin-trip-update.component.scss']
})
export class AdminTripUpdateComponent implements OnInit {
  tripPackage: TripPackage;

  constructor(
    private route: ActivatedRoute,
    private tripPackageService: TripPackageService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTrip();
  }

  getTrip(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tripPackage = this.tripPackageService.getTripPackage(id);
  }

  goBack(): void {
    this.location.back();
  }

}
