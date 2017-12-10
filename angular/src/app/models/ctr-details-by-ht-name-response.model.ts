import {ContractDetailsModel} from './contract-details.model';

export class CtrDetailsByHtNameResponseModel {
  contractDetailsListResponse: ContractDetailsModel;
  hotelName: string;

  constructor(res: ContractDetailsModel, hName: string) {
    this.contractDetailsListResponse = res;
    this.hotelName = hName;
  }
}
