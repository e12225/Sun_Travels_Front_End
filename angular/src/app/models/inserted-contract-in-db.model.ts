export class InsertedContractInDbModel {
  contractID: number;
  hotelID: number;

  constructor(ID: number, hID: number) {
    this.contractID = ID;
    this.hotelID = hID;
  }
}
