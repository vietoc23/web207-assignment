import { Component, OnInit } from '@angular/core';
import { TripPackage } from 'src/app/data/schema/TripPackage';
import { TripPackageService } from 'src/app/data/service/trip-package.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {
  trip: TripPackage;
  constructor(
    private tripPackageService: TripPackageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getTripPackage();
  }

  getTripPackage() {
    this.route.params.subscribe(param => {
      this.tripPackageService.getTripPackage(param.id).subscribe(data => {
        this.trip = data;
      })
    })
  }

}
