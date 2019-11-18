import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTripDetailComponent } from './page/admin-trip-detail.component';


const routes: Routes = [
  {
    path: '',
    component: AdminTripDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTripDetailRoutingModule { }
