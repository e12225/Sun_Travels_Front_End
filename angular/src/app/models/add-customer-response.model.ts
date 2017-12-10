import {InsertedCustomerInDbModel} from './inserted-customer-in-db.model';

export class AddCustomerResponseModel {
  insertingStatus: boolean;
  entity: InsertedCustomerInDbModel;
  message: string;

  constructor(status: boolean, entity: any, msg: string) {
    this.insertingStatus = status;
    this.entity = entity;
    this.message = msg;
  }
}
