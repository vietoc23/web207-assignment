import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTripUpdateRoutingModule } from './admin-trip-update.routing';
import { AdminTripUpdateComponent } from './page/admin-trip-update.component';
import { TripUpdateFormComponent } from './page/trip-update-form/trip-update-form.component';


@NgModule({
  declarations: [AdminTripUpdateComponent, TripUpdateFormComponent],
  imports: [
    CommonModule,
    AdminTripUpdateRoutingModule
  ]
})
export class AdminTripUpdateModule { }
