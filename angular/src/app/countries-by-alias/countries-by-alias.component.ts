import {Component, OnInit} from '@angular/core';
import {CountryModel} from '../models/country.model';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';

@Component({
  selector: 'app-countries-by-alias',
  templateUrl: './countries-by-alias.component.html',
  styleUrls: ['./countries-by-alias.component.css']
})
export class CountriesByAliasComponent implements OnInit {

  countryList: CountryModel[];

  requestValidity: boolean;
  message: string;

  alias: string;

  constructor(private service: SunTravelsServicesService) {
  }

  ngOnInit() {
  }

  getCountriesByAlias(): void {
    if (this.alias) {
      this.requestValidity = true;
      this.service.getCountriesByAliasService(this.alias).subscribe(coList => {

        if(coList.length == 0){
          this.message = 'No matching countries exist for the given name or alias';
          alert(this.message);
        }
        this.countryList = coList;
      });
    } else {
      this.message = 'Please enter a country name or an alias to proceed !';
      this.requestValidity = false;
      alert(this.message);
    }
  }
}
