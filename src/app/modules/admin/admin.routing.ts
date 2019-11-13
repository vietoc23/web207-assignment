import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './page/admin.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule {}
