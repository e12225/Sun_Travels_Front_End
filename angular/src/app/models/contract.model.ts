export class ContractModel {
  contractID: number;
  hotelName: string;

  constructor(ID: number, hotelName: string) {
    this.contractID = ID;
    this.hotelName = hotelName;
  }
}
