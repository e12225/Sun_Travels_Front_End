import {Component, OnInit} from '@angular/core';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';
import {HotelModel} from '../models/hotel.model';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotelList: HotelModel[];

  constructor(private service: SunTravelsServicesService) {
  }

  ngOnInit() {
    this.getHotelList();
  }

  getHotelList(): void {
    this.service.getHotelListService().subscribe(hotelList => {
      this.hotelList = hotelList;
    });
  }

}
