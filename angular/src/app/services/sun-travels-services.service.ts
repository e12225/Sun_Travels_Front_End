import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Hotel} from '../entities/hotel';
import {SearchReservationResponse} from '../responses/search-reservation-response';

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

  getAvailableReservations(): Observable<SearchReservationResponse[]> {
    return this.httpClient.get<SearchReservationResponse[]>(this.searchReservationsUrl);
  }


}
