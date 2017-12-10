import {CountryModel} from './country.model';

export class AddCountryResponseModel {
  insertingStatus: boolean;
  entity: CountryModel;
  message: string;

  constructor(status: boolean, entity: any, msg: string) {
    this.insertingStatus = status;
    this.entity = entity;
    this.message = msg;
  }
}
