export class InsertedCustomerInDbModel {

  customerID: number;
  customerFirstName: string;
  customerLastName: string;
  customerPhoneNumber: number;
  countryID: number;
  cityID: number;
  ssnOrNic: number;

  constructor(Id: number, fName: string, lName: string, phone: number, coId: number, ciId: number, identity: number) {
    this.customerID = Id;
    this.customerFirstName = fName;
    this.customerLastName = lName;
    this.customerPhoneNumber = phone;
    this.countryID = coId;
    this.cityID = ciId;
    this.ssnOrNic = identity;
  }
}
