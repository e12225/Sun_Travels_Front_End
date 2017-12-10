export class CountryModel {
  countryID: number;
  countryName: string;

  constructor(Id: number, name: string) {
    this.countryID = Id;
    this.countryName = name;
  }
}
