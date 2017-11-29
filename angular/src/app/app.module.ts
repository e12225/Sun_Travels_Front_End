import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HotelsComponent} from './hotels/hotels.component';
import {SunTravelsServicesService} from './services/sun-travels-services.service';
import {HttpClientModule} from '@angular/common/http';
import {SearchComponent} from './available-reservations/search/search.component';
import {RouterModule, Routes} from '@angular/router';
import {RoomTypesComponent} from './room-types/room-types.component';
import {AddContractComponent} from './contracts/add-contract/add-contract.component';
import {ViewContractDetailsComponent} from './contract-details/view-contract-details/view-contract-details.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HotelComponent} from './hotels/hotel/hotel.component';
import {HotelListComponent} from './hotels/hotel-list/hotel-list.component';
import {AvailableReservationsComponent} from './available-reservations/available-reservations.component';
import {ContractDetailsComponent} from './contract-details/contract-details.component';
import {RoomTypeComponent} from './room-types/room-type/room-type.component';
import {ResultComposerComponent} from './available-reservations/result-composer/result-composer.component';
import {ContractsComponent} from './contracts/contracts.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'addNewHotel', component: HotelComponent},
  {path: 'hotelList', component: HotelListComponent},
  {path: 'roomTypes', component: RoomTypesComponent},
  {path: 'searchReservations', component: SearchComponent},
  {path: 'results', component: ResultComposerComponent},
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
    HomeComponent,
    HotelComponent,
    HotelListComponent,
    AvailableReservationsComponent,
    ContractDetailsComponent,
    RoomTypeComponent,
    ResultComposerComponent,
    ContractsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [SunTravelsServicesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
