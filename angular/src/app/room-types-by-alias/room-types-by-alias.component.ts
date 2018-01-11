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

  requestValidity: boolean;
  message: string;

  alias: string;

  constructor(private service: SunTravelsServicesService) {
  }

  ngOnInit() {
  }

  getRoomTypesByAlias(): void {
    if (this.alias) {
      this.requestValidity = true;
      this.service.getRoomTypesByAliasService(this.alias).subscribe(rtList => {

        if(rtList.length == 0){
          this.message = 'No matching room types exist for the given name or alias';
          alert(this.message);
        }
        this.roomTypeList = rtList;
      });
    } else {
      this.message = 'Please enter a room type name or an alias to proceed !';
      this.requestValidity = false;
      alert(this.message);
    }
  }
}
