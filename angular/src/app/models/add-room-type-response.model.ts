import {RoomTypeModel} from './room-type.model';

export class AddRoomTypeResponseModel {
  insertingStatus: boolean;
  entity: RoomTypeModel;
  message: string;

  constructor(status: boolean, entity: any, msg: string) {
    this.insertingStatus = status;
    this.entity = entity;
    this.message = msg;
  }
}
