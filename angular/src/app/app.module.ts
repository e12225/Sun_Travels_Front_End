import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SunTravelsServicesService} from './services/sun-travels-services.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {RoomTypesComponent} from './room-types/room-types.component';
import {AddContractComponent} from './contracts/add-contract/add-contract.component';
import {ViewContractDetailsComponent} from './contract-details/view-contract-details/view-contract-details.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HotelListComponent} from './hotel-list/hotel-list.component';
import {ContractDetailsComponent} from './contract-details/contract-details.component';
import {RoomTypeComponent} from './room-types/room-type/room-type.component';
import {ContractsComponent} from './contracts/contracts.component';
import {SearchReservationsComponent} from './search-reservations/search-reservations.component';
import {AddHotelComponent} from './add-hotel/add-hotel.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'addNewHotel', component: AddHotelComponent},
  {path: 'hotelList', component: HotelListComponent},
  {path: 'roomTypes', component: RoomTypesComponent},
  {path: 'searchReservations', component: SearchReservationsComponent},
  {path: 'newContract', component: AddContractComponent},
  {path: 'contractDetails', component: ViewContractDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchReservationsComponent,
    RoomTypesComponent,
    AddContractComponent,
    ViewContractDetailsComponent,
    HomeComponent,
    AddHotelComponent,
    HotelListComponent,
    ContractDetailsComponent,
    RoomTypeComponent,
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
