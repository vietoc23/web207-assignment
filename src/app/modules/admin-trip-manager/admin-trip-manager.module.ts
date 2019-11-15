import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTripManagerComponent } from './page/admin-trip-manager.component';
import { AdminTripManagerRoutingModule } from './admin-trip-manager.routing';
import { TableRowComponent } from './page/table-row/table-row.component';
import { TripDetailModalComponent } from './page/trip-detail-modal/trip-detail-modal.component';



@NgModule({
  declarations: [AdminTripManagerComponent, TableRowComponent, TripDetailModalComponent],
  imports: [
    CommonModule,
    AdminTripManagerRoutingModule
  ]
})
export class AdminTripManagerModule { }
