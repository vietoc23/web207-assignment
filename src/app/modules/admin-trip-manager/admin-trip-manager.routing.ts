import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminTripManagerComponent } from './page/admin-trip-manager.component';
import { AddNewComponent } from './page/add-new/add-new.component';
import { TripEditComponent } from './page/trip-edit/trip-edit.component';
import { TripDetailsComponent } from './page/trip-details/trip-details.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminTripManagerComponent
  },
  {
    path: 'new',
    component: AddNewComponent
  },
  {
    path: ':id/edit',
    component: TripEditComponent
  },
  {
    path: ':id',
    component: TripDetailsComponent
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminTripManagerRoutingModule {}
