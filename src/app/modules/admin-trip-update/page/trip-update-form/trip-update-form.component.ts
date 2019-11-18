import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-trip-update-form',
  templateUrl: './trip-update-form.component.html',
  styleUrls: ['./trip-update-form.component.scss']
})
export class TripUpdateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tripUpdateForm = new FormGroup({
    name: new FormControl(''),
    
  })

}
