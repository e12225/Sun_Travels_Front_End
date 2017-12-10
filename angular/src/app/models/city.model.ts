export class CityModel {
  cityID: number;
  countryName: string;
  cityName: string;

  constructor(Id: number, name: string, co_name: string) {
    this.cityID = Id;
    this.cityName = name;
    this.countryName = co_name;
  }
}
