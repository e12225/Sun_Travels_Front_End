import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Hotel} from '../entities/hotel';
import {SearchReservationRequest} from '../requests/search-reservation-request';

@Injectable()
export class SunTravelsServicesService {

  private hotelListUrl = 'http://localhost:9999/hotels/list';
  private searchReservationsUrl = 'http://localhost:9999/reservations/search';

  constructor(private httpClient: HttpClient) {
  }

  getHotelList(): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(this.hotelListUrl);
  }

  // TODO: Continue from here

  getAvailableReservations(request: SearchReservationRequest): Observable<SearchReservationRequest> {
    return this.httpClient.post<SearchReservationRequest>(this.searchReservationsUrl, request);
  }
}
