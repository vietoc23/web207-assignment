import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'trip/:id',
        loadChildren: () =>
          import('./modules/admin-trip-detail/admin-trip-detail.module').then(m => m.AdminTripDetailModule)
      },
      {
        path: 'trip/:id/edit',
        loadChildren: () =>
          import('./modules/admin-trip-update/admin-trip-update.module').then(m => m.AdminTripUpdateModule)
      },
      {
        path: 'trips',
        loadChildren: () =>
          import('./modules/admin-trip-manager/admin-trip-manager.module').then(m => m.AdminTripManagerModule)
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/admin/admin.module').then(m => m.AdminModule)
      }
    ]
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then(m => m.HomeModule)
      },
      // {
      //   path: 'about',
      //   loadChildren: () =>
      //     import('./modules/home/about.module').then(m => m.AboutModule)
      // }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
