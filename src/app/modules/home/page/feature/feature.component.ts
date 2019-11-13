import { Component, OnInit, NgModule } from '@angular/core';
import { TripServiceData } from "../../../../data/schema/mock-data/TripServiceData";

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})

export class FeatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  features= TripServiceData;

  deleteItem(id: number) {
    this.features = this.features.filter(feature => feature.id != id);
  }
}
