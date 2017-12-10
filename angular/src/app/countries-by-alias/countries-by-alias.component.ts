import { Component, OnInit } from '@angular/core';
import {CountryModel} from '../models/country.model';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';

@Component({
  selector: 'app-countries-by-alias',
  templateUrl: './countries-by-alias.component.html',
  styleUrls: ['./countries-by-alias.component.css']
})
export class CountriesByAliasComponent implements OnInit {

  countryList: CountryModel[];
  alias: string;

  constructor(private service: SunTravelsServicesService) { }

  ngOnInit() {
  }

  getCountriesByAlias(): void {
    this.service.getCountriesByAliasService(this.alias).subscribe(coList => {
      this.countryList = coList;
    });
  }
}
