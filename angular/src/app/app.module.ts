import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SunTravelsServicesService} from './services/sun-travels-services.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {AddContractComponent} from './add-contract/add-contract.component';
import {FormsModule} from '@angular/forms';
import {HotelListComponent} from './hotel-list/hotel-list.component';
import {SearchReservationsComponent} from './search-reservations/search-reservations.component';
import {AddHotelComponent} from './add-hotel/add-hotel.component';
import {AddContractDetailsComponent} from './add-contract-details/add-contract-details.component';
import {ContractDetailsListComponent} from './contract-details-list/contract-details-list.component';
import {ContractListComponent} from './contract-list/contract-list.component';
import {AddRoomTypeComponent} from './add-room-type/add-room-type.component';
import {RoomTypeListComponent} from './room-type-list/room-type-list.component';
import {HotelsByAliasComponent} from './hotels-by-alias/hotels-by-alias.component';
import {RoomTypesByAliasComponent} from './room-types-by-alias/room-types-by-alias.component';
import {AddCountryComponent} from './add-country/add-country.component';
import {CountryListComponent} from './country-list/country-list.component';
import {CountriesByAliasComponent} from './countries-by-alias/countries-by-alias.component';
import {AddCityComponent} from './add-city/add-city.component';
import {CityListComponent} from './city-list/city-list.component';
import {CitiesByAliasComponent} from './cities-by-alias/cities-by-alias.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomersSearchComponent} from './customers-search/customers-search.component';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {ContractDetailsSearchComponent} from './contract-details-search/contract-details-search.component';

const appRoutes: Routes = [
  {path: 'addNewHotel', component: AddHotelComponent},
  {path: 'hotelList', component: HotelListComponent},
  {path: 'hotelsByAlias', component: HotelsByAliasComponent},
  {path: 'addNewRoomType', component: AddRoomTypeComponent},
  {path: 'roomTypeList', component: RoomTypeListComponent},
  {path: 'roomTypeByNameOrAlias', component: RoomTypesByAliasComponent},
  {path: 'addNewCountry', component: AddCountryComponent},
  {path: 'countryList', component: CountryListComponent},
  {path: 'countriesByNameOrAlias', component: CountriesByAliasComponent},
  {path: 'addNewCity', component: AddCityComponent},
  {path: 'cityList', component: CityListComponent},
  {path: 'citiesByNameOrAlias', component: CitiesByAliasComponent},
  {path: 'searchReservations', component: SearchReservationsComponent},
  {path: 'addNewContract', component: AddContractComponent},
  {path: 'contractList', component: ContractListComponent},
  {path: 'addContractDetails', component: AddContractDetailsComponent},
  {path: 'contractDetailsList', component: ContractDetailsListComponent},
  {path: 'searchContractDetails', component: ContractDetailsSearchComponent},
  {path: 'addNewCustomer', component: AddCustomerComponent},
  {path: 'customerList', component: CustomerListComponent},
  {path: 'searchCustomers', component: CustomersSearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchReservationsComponent,
    AddContractComponent,
    AddHotelComponent,
    HotelListComponent,
    AddContractDetailsComponent,
    ContractDetailsListComponent,
    ContractListComponent,
    AddRoomTypeComponent,
    RoomTypeListComponent,
    HotelsByAliasComponent,
    RoomTypesByAliasComponent,
    AddCountryComponent,
    CountryListComponent,
    CountriesByAliasComponent,
    AddCityComponent,
    CityListComponent,
    CitiesByAliasComponent,
    CustomerListComponent,
    CustomersSearchComponent,
    AddCustomerComponent,
    ContractDetailsSearchComponent
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
