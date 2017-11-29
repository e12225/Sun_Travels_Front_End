import {Component, OnInit} from '@angular/core';
import {SunTravelsServicesService} from '../../services/sun-travels-services.service';

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
  newHotel;

  constructor(private service: SunTravelsServicesService) {
    this.newHotel = {
      hotelName: null,
      hotelPhoneNumber: null,
      countryID: null,
      cityID: null
    };
  }

  ngOnInit() {
  }

  addHotel(): void {

    this.newHotel.hotelName = this.hotelName;
    this.newHotel.hotelPhoneNumber = this.hotelPhoneNumber;
    this.newHotel.countryID = this.countryID;
    this.newHotel.cityID = this.cityID;

    this.service.addHotelService(this.newHotel).subscribe();
  }
}
