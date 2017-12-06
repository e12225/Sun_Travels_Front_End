import {InsertedContractDetailsInDbModel} from './inserted-contract-details-in-db.model';

export class AddContractDetailsResponseModel {

  insertingStatus: boolean;
  entity: InsertedContractDetailsInDbModel;
  message: string;

  constructor(status: boolean, entity: any, msg: string) {
    this.insertingStatus = status;
    this.entity = entity;
    this.message = msg;
  }
}
