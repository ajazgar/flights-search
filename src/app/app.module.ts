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
import { CheckboxComponent } from './shared/checkbox/checkbox.component';
import { RecommendationsComponent } from './shared/recommendations/recommendations.component';
import { FooterComponent} from './shared/footer/footer.component';
import { ReviewsComponent } from './shared/reviews/reviews.component';
import { BtnSecondaryComponent } from './shared/btn-secondary/btn-secondary.component';
import { BtnPrimaryComponent } from './shared/btn-primary/btn-primary.component';
import { StepperComponent } from './shared/stepper/stepper.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {HighlightDirective} from './highlight.directive';
import { ModalComponent } from './shared/modal/modal.component';
import { FlightsComponent } from './pages/flights/flights.component';
import { ResultTableComponent } from './shared/result-table/result-table.component';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    HotelsComponent,
    CarsComponent,
    DiscoverComponent,
    DropdownComponent,
    CheckboxComponent,
    RecommendationsComponent,
    FooterComponent,
    ReviewsComponent,
    BtnSecondaryComponent,
    BtnPrimaryComponent,
    StepperComponent,
    HighlightDirective,
    ModalComponent,
    FlightsComponent,
    ResultTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputsModule,
    BrowserAnimationsModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
