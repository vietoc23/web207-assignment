import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TripService } from 'src/app/data/schema/TripService';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.scss']
})

export class FeatureItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onReadMore: TripService;

  @Input() feature: TripService;

  @Output() deleteItem = new EventEmitter<number>();

  deleteCard(id: number) {
    this.deleteItem.emit(id);
  }

  readMore(feature: TripService) {
    this.onReadMore = feature;
  }
}
