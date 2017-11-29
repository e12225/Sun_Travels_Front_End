import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {HotelComponent} from '../hotels/hotel/hotel.component';
import {SearchComponent} from '../available-reservations/search/search.component';
import {ResultComposerComponent} from '../available-reservations/result-composer/result-composer.component';

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

  addHotelService(hotel: HotelComponent): Observable<any> {
    console.log(hotel);
    return this.httpClient.post(this.addHotelUrl, hotel);
  }

  getAvailableReservationsService(request: SearchComponent): Observable<ResultComposerComponent[]> {
    return this.httpClient.post<ResultComposerComponent[]>(this.searchReservationsUrl, request);
  }
}
