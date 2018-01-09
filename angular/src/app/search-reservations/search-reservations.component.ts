import {Component, OnInit} from '@angular/core';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';
import {AvailableReservationModel} from '../models/available-reservation.model';
import {ReservationSearchModel} from '../models/reservation-search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search-reservations.component.html',
  styleUrls: ['./search-reservations.component.css']
})
export class SearchReservationsComponent implements OnInit {

  reservationSearch: ReservationSearchModel;
  reservationResults: AvailableReservationModel[];

  requestValidity: boolean;
  message: string;

  checkInDate: Date;
  numberOfNights: number;
  numberOfRooms: number;
  totalAdults: number;
  requestedMaxAdultsPerRoom: number;

  constructor(private service: SunTravelsServicesService) {
    this.reservationSearch = new ReservationSearchModel(this.checkInDate, this.numberOfNights, this.numberOfRooms, this.totalAdults, this.requestedMaxAdultsPerRoom);
  }

  ngOnInit() {
  }

  search(): void {
    if (this.reservationSearch.checkInDate && this.reservationSearch.numberOfNights && this.reservationSearch.numberOfRooms && this.reservationSearch.totalAdults && this.reservationSearch.requestedMaxAdultsPerRoom) {
      this.requestValidity = true;
      this.service.getAvailableReservationsService(this.reservationSearch).subscribe(reservationList => {
        this.reservationResults = reservationList;
      });
    } else {
      this.message = 'Please enter the missing information to proceed !';
      this.requestValidity = false;
    }
  }
}

