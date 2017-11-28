import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {SearchReservationRequest} from '../requests/search-reservation-request';
import {Hotel} from '../entities/hotel';
import {ReservationComposer} from '../entities/reservation-composer';

@Injectable()
export class SunTravelsServicesService {

  private searchReservationsUrl = 'http://localhost:9999/reservations/search';
  private hotelListUrl = 'http://localhost:9999/hotels/list';

  constructor(private httpClient: HttpClient) {
  }

  getHotelList(): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(this.hotelListUrl);
  }

  getAvailableReservations(request: SearchReservationRequest): Observable<ReservationComposer[]> {
    // this should be edited according to below method :D !!!
    return this.httpClient.post<ReservationComposer[]>(this.searchReservationsUrl, request);
  }
}
