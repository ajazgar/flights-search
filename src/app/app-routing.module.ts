import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotelsComponent} from './pages/hotels/hotels.component';
import {CarsComponent} from './pages/cars/cars.component';
import {DiscoverComponent} from './pages/discover/discover.component';

const routes: Routes = [
  {path: 'hotele', component: HotelsComponent},
  {path: 'samochody', component: CarsComponent},
  {path: 'discover', component: DiscoverComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
