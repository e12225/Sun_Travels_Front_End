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

@Injectable()
export class SunTravelsServicesService {

  private searchReservationsUrl = 'http://localhost:9999/reservations/search';
  private hotelListUrl = 'http://localhost:9999/hotels/list';
  private hotelsByAliasUrl = 'http://localhost:9999/hotels/listByName/';
  private addHotelUrl = 'http://localhost:9999/hotels/add';
  private contractListUrl = 'http://localhost:9999/contracts/list';
  private addContractUrl = 'http://localhost:9999/contracts/add';
  private contractDetailsListUrl = 'http://localhost:9999/contractDetails/list';
  private addContractDetailsUrl = 'http://localhost:9999/contractDetails/add';
  private roomTypeListUrl = 'http://localhost:9999/roomTypes/list';
  private roomTypesByAliasUrl = 'http://localhost:9999/roomTypes/listByName/';
  private addRoomTypeUrl = 'http://localhost:9999/roomTypes/add';

  constructor(private httpClient: HttpClient) {
  }

  getAvailableReservationsService(request: ReservationSearchModel): Observable<AvailableReservationModel[]> {
    return this.httpClient.post<AvailableReservationModel[]>(this.searchReservationsUrl, request);
  }

  getHotelListService(): Observable<HotelModel[]> {
    return this.httpClient.get<HotelModel[]>(this.hotelListUrl);
  }

  getHotelsByAliasService(alias: string): Observable<HotelModel[]> {
    return this.httpClient.get<HotelModel[]>(this.hotelsByAliasUrl + alias);
  }

  addHotelService(hotel: HotelModel): Observable<AddHotelResponseModel> {
    return this.httpClient.post<AddHotelResponseModel>(this.addHotelUrl, hotel);
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

  getRoomTypeListService(): Observable<RoomTypeModel[]> {
    return this.httpClient.get<RoomTypeModel[]>(this.roomTypeListUrl);
  }

  getRoomTypesByAliasService(alias: string): Observable<RoomTypeModel[]> {
    return this.httpClient.get<RoomTypeModel[]>(this.roomTypesByAliasUrl + alias);
  }

  addRoomTypeService(roomType: RoomTypeModel): Observable<AddRoomTypeResponseModel> {
    return this.httpClient.post<AddRoomTypeResponseModel>(this.addRoomTypeUrl, roomType);
  }
}
