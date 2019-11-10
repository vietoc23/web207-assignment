import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home.component';
import { HomeRoutingModule } from './home.routing';
import { BannerComponent } from './page/banner/banner.component';
import { FeatureComponent } from './page/feature/feature.component';
import { TripPackageComponent } from './page/trip-package/trip-package.component';
import { CtaComponent } from './page/cta/cta.component';
import { PopularPlacesComponent } from './page/popular-places/popular-places.component';
import { TeamComponent } from './page/team/team.component';
import { CtaSubscribeComponent } from './page/cta-subscribe/cta-subscribe.component';
import { TestimonialsComponent } from './page/testimonials/testimonials.component';
import { BlogComponent } from './page/blog/blog.component';



@NgModule({
  declarations: [HomeComponent, BannerComponent, FeatureComponent, TripPackageComponent, CtaComponent, PopularPlacesComponent, TeamComponent, CtaSubscribeComponent, TestimonialsComponent, BlogComponent],
  imports: [
    HomeRoutingModule,
  ]
})
export class HomeModule { }
