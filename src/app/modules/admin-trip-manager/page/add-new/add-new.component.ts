import { Component, OnInit } from '@angular/core';
import { TripPackage } from 'src/app/data/schema/TripPackage';
import { TripPackageService } from 'src/app/data/service/trip-package.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  trip: TripPackage = new TripPackage();
  constructor(
    private tripPackageService: TripPackageService,
    private navigate: Router
  ) { }

  ngOnInit() {
  }

  addNew() {
    this.tripPackageService.addTripPackage(this.trip).subscribe(data => {
      console.log(data);
      this.navigate.navigateByUrl('admin/trips');
    })

  }

}
