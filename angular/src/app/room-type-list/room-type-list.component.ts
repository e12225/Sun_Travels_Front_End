import {Component, OnInit} from '@angular/core';
import {RoomTypeModel} from '../models/room-type.model';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';

@Component({
  selector: 'app-room-type-list',
  templateUrl: './room-type-list.component.html',
  styleUrls: ['./room-type-list.component.css']
})
export class RoomTypeListComponent implements OnInit {

  roomTypeList: RoomTypeModel[];

  constructor(private service: SunTravelsServicesService) {
  }

  ngOnInit() {
    this.getRoomTypeList();
  }

  getRoomTypeList(): void {
    this.service.getRoomTypeListService().subscribe(rtList => {
      this.roomTypeList = rtList;
    });
  }
}
