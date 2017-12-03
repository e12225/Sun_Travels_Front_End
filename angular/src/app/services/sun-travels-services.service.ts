import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AvailableReservationModel} from '../models/available-reservation.model';
import {HotelModel} from '../models/hotel.model';
import {ReservationSearchModel} from '../models/reservation-search.model';
import {HotelListElementModel} from "../models/hotel-list-element.model";

@Injectable()
export class SunTravelsServicesService {

  private searchReservationsUrl = 'http://localhost:9999/reservations/search';
  private hotelListUrl = 'http://localhost:9999/hotels/list';
  private addHotelUrl = 'http://localhost:9999/hotels/add';

  constructor(private httpClient: HttpClient) {
  }

  getHotelListService(): Observable<HotelListElementModel[]> {
    return this.httpClient.get<HotelListElementModel[]>(this.hotelListUrl);
  }

  addHotelService(hotel: HotelModel): Observable<any> {
    console.log(hotel);
    return this.httpClient.post(this.addHotelUrl, hotel);
  }

  getAvailableReservationsService(request: ReservationSearchModel): Observable<AvailableReservationModel[]> {
    return this.httpClient.post<AvailableReservationModel[]>(this.searchReservationsUrl, request);
  }
}
