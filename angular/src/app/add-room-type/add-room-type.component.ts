import {Component, OnInit} from '@angular/core';
import {AddRoomTypeResponseModel} from '../models/add-room-type-response.model';
import {RoomTypeModel} from '../models/room-type.model';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';

@Component({
  selector: 'app-add-room-type',
  templateUrl: './add-room-type.component.html',
  styleUrls: ['./add-room-type.component.css']
})
export class AddRoomTypeComponent implements OnInit {

  rt_response: AddRoomTypeResponseModel;
  roomType: RoomTypeModel;

  roomTypeID: number;
  roomTypeName: string;

  constructor(private service: SunTravelsServicesService) {
    this.roomType = new RoomTypeModel(this.roomTypeID, this.roomTypeName);
  }

  ngOnInit() {
    this.rt_response = new AddRoomTypeResponseModel(null, new RoomTypeModel(null, null), null);
  }

  addRoomType(): void {
    this.service.addRoomTypeService(this.roomType).subscribe(response => {
      this.rt_response = response;
    });
  }
}
