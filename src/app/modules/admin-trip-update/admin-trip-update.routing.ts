import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTripUpdateComponent } from './page/admin-trip-update.component';


const routes: Routes = [
  {
    path: '',
    component: AdminTripUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTripUpdateRoutingModule { }
