import {Component, OnInit} from '@angular/core';
import {ReservationComposer} from '../entities/reservation-composer';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';
import {SearchReservationRequest} from '../requests/search-reservation-request';

@Component({
  selector: 'app-search-reservation-results',
  templateUrl: './search-reservation-results.component.html',
  styleUrls: ['./search-reservation-results.component.css']
})
export class SearchReservationResultsComponent implements OnInit {

  availableReservationList: ReservationComposer[];

  constructor(private service: SunTravelsServicesService, private request: SearchReservationRequest) {

  }

  ngOnInit() {
  }

  onClicked(checkIn: Date, nights: number, rooms: number, adults: number[]) {

    // composing the request object
    this.request.checkInDate = checkIn;
    this.request.numberOfNights = nights;
    this.request.numberOfRooms = rooms;
    this.request.noOfAdultsPerRoom = adults;

    this.service.getAvailableReservations(this.request).subscribe(reservationList => {
      this.availableReservationList = reservationList;
    });
  }

}
