import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminTripDetailRoutingModule } from './admin-trip-detail.routing';
import { AdminTripDetailComponent } from './page/admin-trip-detail.component';


@NgModule({
  declarations: [AdminTripDetailComponent],
  imports: [
    CommonModule,
    AdminTripDetailRoutingModule
  ]
})
export class AdminTripDetailModule { }
