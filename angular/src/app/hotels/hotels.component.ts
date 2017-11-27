import {Component, OnInit} from '@angular/core';
import {Hotel} from '../entities/hotel';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotelList: Hotel[];

  constructor(private service: SunTravelsServicesService) {
  }

  ngOnInit() {
    this.getHotelList();
  }

  getHotelList(): void {
    this.service.getHotelList().subscribe(hotelList => {
      this.hotelList = hotelList;
    });
  }

}
