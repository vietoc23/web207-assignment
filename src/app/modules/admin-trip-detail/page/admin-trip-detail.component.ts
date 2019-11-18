import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripPackageService } from 'src/app/data/service/trip-package.service';
import { TripPackage } from 'src/app/data/schema/TripPackage';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-trip-detail',
  templateUrl: './admin-trip-detail.component.html',
  styleUrls: ['./admin-trip-detail.component.scss']
})
export class AdminTripDetailComponent implements OnInit {
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
