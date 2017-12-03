export class HotelListElementModel {
  hotelID: number;
  hotelName: string;
  hotelPhoneNumber: number;
  countryName: string;
  cityName: string;

  constructor(Id: number, name: string, phoneNumber: number, countryName: string, cityName: string) {
    this.hotelID = Id;
    this.hotelName = name;
    this.hotelPhoneNumber = phoneNumber;
    this.countryName = countryName;
    this.cityName = cityName;
  }
}
