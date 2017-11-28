import {Component, OnInit} from '@angular/core';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';

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
  newHotel: HotelComponent;

  constructor(private service: SunTravelsServicesService) {
  }

  ngOnInit() {
    this.newHotel.hotelID = this.hotelID;
    this.newHotel.hotelName = this.hotelName;
    this.newHotel.hotelPhoneNumber = this.hotelPhoneNumber;
    this.newHotel.countryID = this.countryID;
    this.newHotel.cityID = this.cityID;
  }

  addHotel(): void {
    this.service.addHotelService(this.newHotel).subscribe();
  }

}
