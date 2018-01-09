import {Component, OnInit} from '@angular/core';
import {HotelModel} from '../models/hotel.model';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';

@Component({
  selector: 'app-hotels-by-alias',
  templateUrl: './hotels-by-alias.component.html',
  styleUrls: ['./hotels-by-alias.component.css']
})
export class HotelsByAliasComponent implements OnInit {

  hotelList: HotelModel[];

  requestValidity: boolean;
  message: string;

  alias: string;

  constructor(private service: SunTravelsServicesService) {
  }

  ngOnInit() {
  }

  getHotelsByAlias(): void {
    if (this.alias) {
      this.requestValidity = true;
      this.service.getHotelsByAliasService(this.alias).subscribe(hotelList => {
        this.hotelList = hotelList;
      });
    } else {
      this.message = 'Please enter a hotel name or an alias to proceed !';
      this.requestValidity = false;
    }
  }
}
