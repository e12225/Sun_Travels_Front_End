import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotelID: number;
  hotelName: string;
  hotelPhoneNumber: number;
  countryID: number;
  cityID: number;

  constructor() {
  }

  ngOnInit() {
  }

}
