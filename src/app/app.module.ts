import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SearchComponent } from './shared/search/search.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { CarsComponent } from './pages/cars/cars.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { SearchHeaderComponent } from './shared/search-header/search-header.component';
import { CheckboxComponent } from './shared/checkbox/checkbox.component';
import { RecommendationsComponent } from './shared/recommendations/recommendations.component';
import { FooterComponent} from './shared/footer/footer.component';
import { ReviewsComponent } from './shared/reviews/reviews.component';
import { BtnSecondaryComponent } from './shared/btn-secondary/btn-secondary.component';
import { BtnPrimaryComponent } from './shared/btn-primary/btn-primary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    HotelsComponent,
    CarsComponent,
    DiscoverComponent,
    DropdownComponent,
    SearchHeaderComponent,
    CheckboxComponent,
    RecommendationsComponent,
    FooterComponent,
    ReviewsComponent,
    BtnSecondaryComponent,
    BtnPrimaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
