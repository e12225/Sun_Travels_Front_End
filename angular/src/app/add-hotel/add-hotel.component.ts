import {Component, OnInit} from '@angular/core';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';
import {HotelModel} from '../models/hotel.model';
import {AddHotelResponseModel} from '../models/add-hotel-response.model';
import {InsertedHotelInDbModel} from '../models/inserted-hotel-in-db.model';

@Component({
  selector: 'app-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  h_response: AddHotelResponseModel;
  hotel: HotelModel;

  requestValidity: boolean;
  message: string;

  hotelID: number;
  hotelName: string;
  hotelPhoneNumber: number;
  countryName: string;
  cityName: string;

  constructor(private service: SunTravelsServicesService) {
    this.hotel = new HotelModel(this.hotelID, this.hotelName, this.hotelPhoneNumber, this.countryName, this.cityName);
  }

  ngOnInit() {
    this.h_response = new AddHotelResponseModel(null, new InsertedHotelInDbModel(null, null, null, null, null), null);
  }

  addHotel(): void {
    if (this.hotel.hotelName && this.hotel.hotelPhoneNumber && this.hotel.countryName && this.hotel.cityName) {
      this.requestValidity = true;
      this.service.addHotelService(this.hotel).subscribe(response => {
        this.h_response = response;
      });
    } else {
      this.message = 'Please enter the missing information to proceed !';
      this.requestValidity = false;
    }
  }
}
