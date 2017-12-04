import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AvailableReservationModel} from '../models/available-reservation.model';
import {HotelModel} from '../models/hotel.model';
import {ReservationSearchModel} from '../models/reservation-search.model';
import {HotelListElementModel} from '../models/hotel-list-element.model';
import {AddHotelResponseModel} from '../models/add-hotel-response.model';
import {ContractModel} from '../models/contract.model';
import {AddContractResponseModel} from '../models/add-contract-response.model';

@Injectable()
export class SunTravelsServicesService {

  private searchReservationsUrl = 'http://localhost:9999/reservations/search';
  private hotelListUrl = 'http://localhost:9999/hotels/list';
  private addHotelUrl = 'http://localhost:9999/hotels/add';
  private addContractUrl = 'http://localhost:9999/contracts/add';

  constructor(private httpClient: HttpClient) {
  }

  getHotelListService(): Observable<HotelListElementModel[]> {
    return this.httpClient.get<HotelListElementModel[]>(this.hotelListUrl);
  }

  addHotelService(hotel: HotelModel): Observable<AddHotelResponseModel> {
    return this.httpClient.post<AddHotelResponseModel>(this.addHotelUrl, hotel);
  }

  getAvailableReservationsService(request: ReservationSearchModel): Observable<AvailableReservationModel[]> {
    return this.httpClient.post<AvailableReservationModel[]>(this.searchReservationsUrl, request);
  }

  addContractService(contract: ContractModel): Observable<AddContractResponseModel> {
    return this.httpClient.post<AddContractResponseModel>(this.addContractUrl, contract);
  }
}
