import {Component, OnInit} from '@angular/core';
import {SearchReservationResponse} from '../responses/search-reservation-response';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';
import {SearchReservationRequest} from '../requests/search-reservation-request';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchReservationRequest: SearchReservationRequest;
  searchReservationResponse: SearchReservationResponse;

  constructor(private service: SunTravelsServicesService) {
  }

  ngOnInit() {
    // return this.searchReservations(this.searchReservationRequest);
  }

  // searchReservations(request: SearchReservationRequest): SearchReservationResponse {
  //   return this.service.getAvailableReservations({request} as SearchReservationRequest).subscribe(
  //     request => {}
  //   );
  //   });
}

