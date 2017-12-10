import {Component, OnInit} from '@angular/core';
import {CountryModel} from '../models/country.model';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countryList: CountryModel[];

  constructor(private service: SunTravelsServicesService) {
  }

  ngOnInit() {
    this.getCountryList();
  }

  getCountryList(): void {
    this.service.getCountryListService().subscribe(coList => {
      this.countryList = coList;
    });
  }
}
