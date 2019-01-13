import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SearchComponent } from './shared/search/search.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CarsComponent } from './pages/cars/cars.component';
import { DiscoverComponent } from './pages/discover/discover.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    HotelsComponent,
    DashboardComponent,
    CarsComponent,
    DiscoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
