export class CustomerModel {
  customerID: number;
  customerFirstName: string;
  customerLastName: string;
  customerPhoneNumber: number;
  countryName: string;
  cityName: string;
  ssnOrNic: number;

  constructor(Id: number, fName: string, lName: string, phone: number, co_name: string, ci_name: string, identity: number) {
    this.customerID = Id;
    this.customerFirstName = fName;
    this.customerLastName = lName;
    this.customerPhoneNumber = phone;
    this.countryName = co_name;
    this.cityName = ci_name;
    this.ssnOrNic = identity;
  }
}
