import {Component, OnInit} from '@angular/core';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';
import {HotelModel} from '../models/hotel.model';
import {AddHotelResponseModel} from '../models/add-hotel-response.model';

@Component({
  selector: 'app-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  response: AddHotelResponseModel;
  hotel: HotelModel;

  hotelID: number;
  hotelName: string;
  hotelPhoneNumber: number;
  countryName: string;
  cityName: string;

  constructor(private service: SunTravelsServicesService) {
    this.hotel = new HotelModel(this.hotelID, this.hotelName, this.hotelPhoneNumber, this.countryName, this.cityName);
  }

  ngOnInit() {
  }

  addHotel(): void {
    this.service.addHotelService(this.hotel).subscribe(response => {
      this.response = response;
    });
  }
}
