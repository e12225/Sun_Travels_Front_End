import {Component, OnInit} from '@angular/core';
import {SunTravelsServicesService} from '../../services/sun-travels-services.service';
import {ResultComposerComponent} from '../result-composer/result-composer.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  reservationResults: ResultComposerComponent[];

  checkInDate: Date;
  numberOfNights: number;
  numberOfRooms: number;
  // noOfAdultsPerRoom: number[];
  testnumberOfAdultsPerRoom: number;
  newSearchReservationRequest;

  constructor(private service: SunTravelsServicesService) {
    this.newSearchReservationRequest = {
      checkInDate: null,
      numberOfNights: null,
      numberOfRooms: null,
      testnumberOfAdultsPerRoom: null
    };
  }

  ngOnInit() {
  }

  search(): void {

    this.newSearchReservationRequest.checkInDate = this.checkInDate;
    this.newSearchReservationRequest.numberOfNights = this.numberOfNights;
    this.newSearchReservationRequest.numberOfRooms = this.numberOfRooms;
    this.newSearchReservationRequest.testnumberOfAdultsPerRoom = this.testnumberOfAdultsPerRoom;

    this.service.getAvailableReservationsService(this.newSearchReservationRequest).subscribe(reservationList => {
      this.reservationResults = reservationList;
      console.log(reservationList);
    });
  }
}

