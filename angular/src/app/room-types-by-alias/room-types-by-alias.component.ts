import {Component, OnInit} from '@angular/core';
import {RoomTypeModel} from '../models/room-type.model';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';

@Component({
  selector: 'app-room-types-by-alias',
  templateUrl: './room-types-by-alias.component.html',
  styleUrls: ['./room-types-by-alias.component.css']
})
export class RoomTypesByAliasComponent implements OnInit {

  roomTypeList: RoomTypeModel[];
  alias: string;

  constructor(private service: SunTravelsServicesService) {
  }

  ngOnInit() {
  }

  getRoomTypesByAlias(): void {
    this.service.getRoomTypesByAliasService(this.alias).subscribe(rtList => {
      this.roomTypeList = rtList;
    });
  }
}
