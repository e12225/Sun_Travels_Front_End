import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {SearchReservationRequest} from '../requests/search-reservation-request';
import {ReservationComposer} from '../entities/reservation-composer';
import {HotelComponent} from '../hotel/hotel.component';

@Injectable()
export class SunTravelsServicesService {

  private searchReservationsUrl = 'http://localhost:9999/reservations/search';
  private hotelListUrl = 'http://localhost:9999/hotels/list';
  private addHotelUrl = 'http://localhost:9999/hotels/add';

  constructor(private httpClient: HttpClient) {
  }

  getHotelListService(): Observable<HotelComponent[]> {
    return this.httpClient.get<HotelComponent[]>(this.hotelListUrl);
  }

  addHotelService(hotel: HotelComponent): Observable<HotelComponent> {
    return this.httpClient.post<HotelComponent>(this.addHotelUrl, hotel);
  }

  getAvailableReservationsService(request: SearchReservationRequest): Observable<ReservationComposer[]> {
    // this should be edited according to below method :D !!!
    return this.httpClient.post<ReservationComposer[]>(this.searchReservationsUrl, request);
  }
}
