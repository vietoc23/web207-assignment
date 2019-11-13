import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminTripManagerComponent } from './page/admin-trip-manager.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminTripManagerComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminTripManagerRoutingModule {}
