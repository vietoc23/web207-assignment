import { Component, OnInit } from '@angular/core';
import { TripPackageService } from 'src/app/data/service/trip-package.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TripPackage } from 'src/app/data/schema/TripPackage';

@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.scss']
})
export class TripEditComponent implements OnInit {
  trip: TripPackage;
  constructor(
    private tripPackageService: TripPackageService,
    private route: ActivatedRoute,
    private navigate: Router
  ) { }

  ngOnInit() {
    this.getTripPackage();
  }

  getTripPackage() {
    this.route.params.subscribe(param => {
      this.tripPackageService.getTripPackage(param.id).subscribe(data => {
        console.log(data);

        this.trip = data;
      })
    })
  }

  saveTrip(trip) {
    console.log(trip);

    this.tripPackageService.saveTripPackage(trip).subscribe(data => {

      this.navigate.navigateByUrl('/admin/trips');
    })
  }

}
