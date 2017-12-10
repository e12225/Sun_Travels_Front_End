export class ContractModel {
  contractID: number;
  hotelName: string;
  hotelPhoneNumber: number;

  constructor(ID: number, hotelName: string, hPhone: number) {
    this.contractID = ID;
    this.hotelName = hotelName;
    this.hotelPhoneNumber = hPhone;
  }
}
