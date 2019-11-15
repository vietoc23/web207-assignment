import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TripPackage } from 'src/app/data/schema/TripPackage';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  @Input() trip: TripPackage;
  @Input() index: number;

  @Output() deleteTripId = new EventEmitter<number>();

  tripDetails: TripPackage;

  showDetails(trip: TripPackage) {
    this.tripDetails = trip;
  }

  deleteTripPackage(id: number) {
    this.deleteTripId.emit(id);
  }

}
