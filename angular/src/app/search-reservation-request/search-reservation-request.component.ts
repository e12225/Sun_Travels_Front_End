import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-reservation-request',
  templateUrl: './search-reservation-request.component.html',
  styleUrls: ['./search-reservation-request.component.css']
})
export class SearchReservationRequestComponent implements OnInit {

  @Input() checkInDate: Date;
  @Input() numberOfNights: number;
  @Input() numberOfRooms: number;
  @Input() noOfAdultsPerRoom: number[];

  @Output() clicked = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onClick(checkInDate: Date, numberOfNights: number, numberOfRooms: number, noOfAdultsPerRoom: number[]) {
    this.clicked.emit({checkInDate, numberOfNights, numberOfRooms, noOfAdultsPerRoom});
  }

}
