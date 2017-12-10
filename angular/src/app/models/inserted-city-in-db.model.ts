export class InsertedCityInDbModel {

  cityID: number;
  countryID: number;
  cityName: string;

  constructor(Id: number, coId: number, name: string) {
    this.cityID = Id;
    this.countryID = coId;
    this.cityName = name;
  }
}
