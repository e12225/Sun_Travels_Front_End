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

  checkInDate: Date;
  numberOfNights: number;
  numberOfRooms: number;
  // noOfAdultsPerRoom: number[]; //
  // noOfAdultsPerRoom: number;
  noOfAdultsPerRoom: string;

  constructor(private service: SunTravelsServicesService) {
    this.reservationSearch = new ReservationSearchModel(this.checkInDate, this.numberOfNights, this.numberOfRooms, this.noOfAdultsPerRoom);
  }

  ngOnInit() {
  }

  search(): void {
    this.service.getAvailableReservationsService(this.reservationSearch).subscribe(reservationList => {
      this.reservationResults = reservationList;
    });
  }
}

