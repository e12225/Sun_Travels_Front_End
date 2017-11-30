export class HotelModel {
  hotelID: number;
  hotelName: string;
  hotelPhoneNumber: number;
  countryID: number;
  cityID: number;

  constructor(Id: number, name: string, phoneNumber: number, countryId: number, cityId) {
    this.hotelID = Id;
    this.hotelName = name;
    this.hotelPhoneNumber = phoneNumber;
    this.countryID = countryId;
    this.cityID = cityId;
  }
}
