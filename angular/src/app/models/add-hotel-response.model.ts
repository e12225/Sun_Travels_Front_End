import {InsertedHotelInDbModel} from './inserted-hotel-in-db.model';

export class AddHotelResponseModel {

  insertingStatus: boolean;
  entity: InsertedHotelInDbModel;
  message: string;

  constructor(status: boolean, entity: any, msg: string) {
    this.insertingStatus = status;
    this.entity = entity;
    this.message = msg;
  }
}
