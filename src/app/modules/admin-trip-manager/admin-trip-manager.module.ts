import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTripManagerComponent } from './page/admin-trip-manager.component';
import { AdminTripManagerRoutingModule } from './admin-trip-manager.routing';
import { TableRowComponent } from './page/table-row/table-row.component';



@NgModule({
  declarations: [AdminTripManagerComponent, TableRowComponent],
  imports: [
    CommonModule,
    AdminTripManagerRoutingModule
  ]
})
export class AdminTripManagerModule { }
