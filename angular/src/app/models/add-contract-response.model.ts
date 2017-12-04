import {InsertedContractInDbModel} from './inserted-contract-in-db.model';

export class AddContractResponseModel {
  insertingStatus: boolean;
  entity: InsertedContractInDbModel;
  message: string;

  constructor(status: boolean, entity: any, msg: string) {
    this.insertingStatus = status;
    this.entity = entity;
    this.message = msg;
  }
}
