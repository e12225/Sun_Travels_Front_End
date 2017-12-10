import {InsertedCityInDbModel} from './inserted-city-in-db.model';

export class AddCityResponseModel {
  insertingStatus: boolean;
  entity: InsertedCityInDbModel;
  message: string;

  constructor(status: boolean, entity: any, msg: string) {
    this.insertingStatus = status;
    this.entity = entity;
    this.message = msg;
  }
}
