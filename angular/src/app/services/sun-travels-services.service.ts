import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AvailableReservationModel} from '../models/available-reservation.model';
import {HotelModel} from '../models/hotel.model';
import {ReservationSearchModel} from '../models/reservation-search.model';
import {AddHotelResponseModel} from '../models/add-hotel-response.model';
import {ContractModel} from '../models/contract.model';
import {AddContractResponseModel} from '../models/add-contract-response.model';
import {ContractDetailsModel} from "../models/contract-details.model";
import {AddContractDetailsResponseModel} from "../models/add-contract-details-response.model";

@Injectable()
export class SunTravelsServicesService {

  private searchReservationsUrl = 'http://localhost:9999/reservations/search';
  private hotelListUrl = 'http://localhost:9999/hotels/list';
  private addHotelUrl = 'http://localhost:9999/hotels/add';
  private contractListUrl = 'http://localhost:9999/contracts/list';
  private addContractUrl = 'http://localhost:9999/contracts/add';
  private contractDetailsListUrl = 'http://localhost:9999/contractDetails/list';
  private addContractDetailsUrl = 'http://localhost:9999/contractDetails/add';

  constructor(private httpClient: HttpClient) {
  }

  getHotelListService(): Observable<HotelModel[]> {
    return this.httpClient.get<HotelModel[]>(this.hotelListUrl);
  }

  addHotelService(hotel: HotelModel): Observable<AddHotelResponseModel> {
    return this.httpClient.post<AddHotelResponseModel>(this.addHotelUrl, hotel);
  }

  getAvailableReservationsService(request: ReservationSearchModel): Observable<AvailableReservationModel[]> {
    return this.httpClient.post<AvailableReservationModel[]>(this.searchReservationsUrl, request);
  }

  getContractListService(): Observable<ContractModel[]> {
    return this.httpClient.get<ContractModel[]>(this.contractListUrl);
  }

  addContractService(contract: ContractModel): Observable<AddContractResponseModel> {
    return this.httpClient.post<AddContractResponseModel>(this.addContractUrl, contract);
  }

  getContractDetailsListService(): Observable<ContractDetailsModel[]> {
    return this.httpClient.get<ContractDetailsModel[]>(this.contractDetailsListUrl);
  }

  addContractDetailsService(contractDetails: ContractDetailsModel): Observable<AddContractDetailsResponseModel> {
    return this.httpClient.post<AddContractDetailsResponseModel>(this.addContractDetailsUrl, contractDetails);
  }
}
