import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SunTravelsServicesService} from './services/sun-travels-services.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {AddContractComponent} from './add-contract/add-contract.component';
import {HomeComponent} from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HotelListComponent} from './hotel-list/hotel-list.component';
import {SearchReservationsComponent} from './search-reservations/search-reservations.component';
import {AddHotelComponent} from './add-hotel/add-hotel.component';
import {AddContractDetailsComponent} from './add-contract-details/add-contract-details.component';
import { ContractDetailsListComponent } from './contract-details-list/contract-details-list.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { AddRoomTypeComponent } from './add-room-type/add-room-type.component';
import { RoomTypeListComponent } from './room-type-list/room-type-list.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'addNewHotel', component: AddHotelComponent},
  {path: 'hotelList', component: HotelListComponent},
  {path: 'addNewRoomType', component: AddRoomTypeComponent},
  {path: 'roomTypeList', component: RoomTypeListComponent},
  {path: 'searchReservations', component: SearchReservationsComponent},
  {path: 'addNewContract', component: AddContractComponent},
  {path: 'contractList', component: ContractListComponent},
  {path: 'contractDetailsList', component: ContractDetailsListComponent},
  {path: 'addContractDetails', component: AddContractDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchReservationsComponent,
    AddContractComponent,
    HomeComponent,
    AddHotelComponent,
    HotelListComponent,
    AddContractDetailsComponent,
    ContractDetailsListComponent,
    ContractListComponent,
    AddRoomTypeComponent,
    RoomTypeListComponent
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
