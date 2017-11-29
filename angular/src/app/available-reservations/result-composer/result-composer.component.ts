import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-composer',
  templateUrl: './result-composer.component.html',
  styleUrls: ['./result-composer.component.css']
})
export class ResultComposerComponent implements OnInit {

  rc_hotelName: string;
  rc_roomType: string;
  rc_markedUpPrice: number;
  rc_roomsAvailability: string;
  newSearchResult;

  constructor() {
    this.newSearchResult = {
      rc_hotelName: null,
      rc_roomType: null,
      rc_markedUpPrice: null,
      rc_roomsAvailability: null
    };
  }

  ngOnInit() {
  }
}
