import {Component, OnInit} from '@angular/core';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';
import {HotelComponent} from '../hotel/hotel.component';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotelList: HotelComponent[];

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
