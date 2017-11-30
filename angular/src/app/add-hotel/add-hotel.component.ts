import {Component, OnInit} from '@angular/core';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';
import {HotelModel} from '../models/hotel.model';

@Component({
  selector: 'app-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  hotel: HotelModel;

  hotelID: number;
  hotelName: string;
  hotelPhoneNumber: number;
  countryID: number;
  cityID: number;

  constructor(private service: SunTravelsServicesService) {
    this.hotel = new HotelModel(this.hotelID, this.hotelName, this.hotelPhoneNumber, this.countryID, this.cityID);
  }

  ngOnInit() {
  }

  addHotel(): void {
    this.service.addHotelService(this.hotel).subscribe();
  }
}
