import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AvailableReservationModel} from '../models/available-reservation.model';
import {HotelModel} from '../models/hotel.model';
import {ReservationSearchModel} from '../models/reservation-search.model';
import {AddHotelResponseModel} from '../models/add-hotel-response.model';
import {ContractModel} from '../models/contract.model';
import {AddContractResponseModel} from '../models/add-contract-response.model';
import {ContractDetailsModel} from '../models/contract-details.model';
import {AddContractDetailsResponseModel} from '../models/add-contract-details-response.model';
import {RoomTypeModel} from '../models/room-type.model';
import {AddRoomTypeResponseModel} from '../models/add-room-type-response.model';
import {CountryModel} from '../models/country.model';
import {AddCountryResponseModel} from '../models/add-country-response.model';
import {CityModel} from "../models/city.model";
import {AddCityResponseModel} from "../models/add-city-response.model";
import {CustomerModel} from "../models/customer.model";
import {AddCustomerResponseModel} from "../models/add-customer-response.model";
import {CtrDetailsByHtNameResponseModel} from "../models/ctr-details-by-ht-name-response.model";

@Injectable()
export class SunTravelsServicesService {

  private searchReservationsUrl = 'http://localhost:9999/reservations/search';

  private hotelListUrl = 'http://localhost:9999/hotels/list';
  private hotelsByAliasUrl = 'http://localhost:9999/hotels/listByName/';
  private addHotelUrl = 'http://localhost:9999/hotels/add';

  private contractListUrl = 'http://localhost:9999/contracts/list';
  private addContractUrl = 'http://localhost:9999/contracts/add';

  private contractDetailsListUrl = 'http://localhost:9999/contractDetails/list';
  private ctrDetailsByHtNameUrl = 'http://localhost:9999/contractDetails/listByHotelName/';
  private addContractDetailsUrl = 'http://localhost:9999/contractDetails/add';

  private roomTypeListUrl = 'http://localhost:9999/roomTypes/list';
  private roomTypesByAliasUrl = 'http://localhost:9999/roomTypes/listByName/';
  private addRoomTypeUrl = 'http://localhost:9999/roomTypes/add';

  private countryListUrl = 'http://localhost:9999/countries/list';
  private countriesByAliasUrl = 'http://localhost:9999/countries/listByName/';
  private addCountryUrl = 'http://localhost:9999/countries/add';

  private cityListUrl = 'http://localhost:9999/cities/list';
  private citiesByAliasUrl = 'http://localhost:9999/cities/listByName/';
  private addCityUrl = 'http://localhost:9999/cities/add';

  private customerListUrl = 'http://localhost:9999/customers/list';
  private customersByAliasUrl = 'http://localhost:9999/customers/listByName/';
  private addCustomerUrl = 'http://localhost:9999/customers/add';
  private customersByIdentityUrl = 'http://localhost:9999/customers/listByIdentity/';

  constructor(private httpClient: HttpClient) {
  }

  // Reservation search service
  getAvailableReservationsService(request: ReservationSearchModel): Observable<AvailableReservationModel[]> {
    return this.httpClient.post<AvailableReservationModel[]>(this.searchReservationsUrl, request);
  }

  // Hotel services
  getHotelListService(): Observable<HotelModel[]> {
    return this.httpClient.get<HotelModel[]>(this.hotelListUrl);
  }

  getHotelsByAliasService(alias: string): Observable<HotelModel[]> {
    return this.httpClient.get<HotelModel[]>(this.hotelsByAliasUrl + alias);
  }

  addHotelService(hotel: HotelModel): Observable<AddHotelResponseModel> {
    return this.httpClient.post<AddHotelResponseModel>(this.addHotelUrl, hotel);
  }

  // Contract services
  getContractListService(): Observable<ContractModel[]> {
    return this.httpClient.get<ContractModel[]>(this.contractListUrl);
  }

  addContractService(contract: ContractModel): Observable<AddContractResponseModel> {
    return this.httpClient.post<AddContractResponseModel>(this.addContractUrl, contract);
  }

  // Contract details services
  getContractDetailsListService(): Observable<ContractDetailsModel[]> {
    return this.httpClient.get<ContractDetailsModel[]>(this.contractDetailsListUrl);
  }

  addContractDetailsService(contractDetails: ContractDetailsModel): Observable<AddContractDetailsResponseModel> {
    return this.httpClient.post<AddContractDetailsResponseModel>(this.addContractDetailsUrl, contractDetails);
  }

  getContractDetailsByHotelNameService(hotelName: string): Observable<CtrDetailsByHtNameResponseModel[]> {
    return this.httpClient.get<CtrDetailsByHtNameResponseModel[]>(this.ctrDetailsByHtNameUrl + hotelName);
  }

  // Room type services
  getRoomTypeListService(): Observable<RoomTypeModel[]> {
    return this.httpClient.get<RoomTypeModel[]>(this.roomTypeListUrl);
  }

  getRoomTypesByAliasService(alias: string): Observable<RoomTypeModel[]> {
    return this.httpClient.get<RoomTypeModel[]>(this.roomTypesByAliasUrl + alias);
  }

  addRoomTypeService(roomType: RoomTypeModel): Observable<AddRoomTypeResponseModel> {
    return this.httpClient.post<AddRoomTypeResponseModel>(this.addRoomTypeUrl, roomType);
  }

  // Country services
  getCountryListService(): Observable<CountryModel[]> {
    return this.httpClient.get<CountryModel[]>(this.countryListUrl);
  }

  getCountriesByAliasService(alias: string): Observable<CountryModel[]> {
    return this.httpClient.get<CountryModel[]>(this.countriesByAliasUrl + alias);
  }

  addCountryService(country: CountryModel): Observable<AddCountryResponseModel> {
    return this.httpClient.post<AddCountryResponseModel>(this.addCountryUrl, country);
  }

  // City services
  getCityListService(): Observable<CityModel[]> {
    return this.httpClient.get<CityModel[]>(this.cityListUrl);
  }

  getCitiesByAliasService(alias: string): Observable<CityModel[]> {
    return this.httpClient.get<CityModel[]>(this.citiesByAliasUrl + alias);
  }

  addCityService(city: CityModel): Observable<AddCityResponseModel> {
    return this.httpClient.post<AddCityResponseModel>(this.addCityUrl, city);
  }

  // Customer services
  getCustomerListService(): Observable<CustomerModel[]> {
    return this.httpClient.get<CustomerModel[]>(this.customerListUrl);
  }

  getCustomersByNameOrAliasService(alias: string): Observable<CustomerModel[]> {
    return this.httpClient.get<CustomerModel[]>(this.customersByAliasUrl + alias);
  }

  addCustomerService(customer: CustomerModel): Observable<AddCustomerResponseModel> {
    return this.httpClient.post<AddCustomerResponseModel>(this.addCustomerUrl, customer);
  }

  getCustomerByIdentityService(identity: string): Observable<CustomerModel> {
    return this.httpClient.get<CustomerModel>(this.customersByIdentityUrl + identity);
  }
}
