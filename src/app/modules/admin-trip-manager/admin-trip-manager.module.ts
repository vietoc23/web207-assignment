import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTripManagerComponent } from './page/admin-trip-manager.component';
import { AdminTripManagerRoutingModule } from './admin-trip-manager.routing';
import { TableRowComponent } from './page/table-row/table-row.component';
import { AddNewComponent } from './page/add-new/add-new.component';
import { FormsModule } from "@angular/forms";
import { TripEditComponent } from './page/trip-edit/trip-edit.component';
import { TripDetailsComponent } from './page/trip-details/trip-details.component';



@NgModule({
  declarations: [AdminTripManagerComponent, TableRowComponent, AddNewComponent, TripEditComponent, TripDetailsComponent],
  imports: [
    CommonModule,
    AdminTripManagerRoutingModule,
    FormsModule
  ]
})
export class AdminTripManagerModule { }
