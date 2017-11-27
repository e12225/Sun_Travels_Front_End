import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HotelsComponent} from './hotels/hotels.component';
import {SunTravelsServicesService} from './services/sun-travels-services.service';
import {HttpClientModule} from '@angular/common/http';
import {SearchComponent} from './search/search.component';
import {RouterModule, Routes} from '@angular/router';
import { RoomTypesComponent } from './room-types/room-types.component';
import {AddContractComponent} from './add-contract/add-contract.component';
import {ViewContractDetailsComponent} from './view-contract-details/view-contract-details.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: 'roomTypes', component: RoomTypesComponent},
  {path: 'searchReservations', component: SearchComponent},
  {path: 'newContract', component: AddContractComponent},
  {path: 'contractDetails', component: ViewContractDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    SearchComponent,
    RoomTypesComponent,
    AddContractComponent,
    ViewContractDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SunTravelsServicesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
