import {Component, OnInit} from '@angular/core';
import {AddCountryResponseModel} from '../models/add-country-response.model';
import {CountryModel} from '../models/country.model';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  co_response: AddCountryResponseModel;
  country: CountryModel;

  countryID: number;
  countryName: string;

  constructor(private service: SunTravelsServicesService) {
    this.country = new CountryModel(this.countryID, this.countryName);
  }

  ngOnInit() {
    this.co_response = new AddCountryResponseModel(null, new CountryModel(null, null), null);
  }

  addCountry(): void {
    this.service.addCountryService(this.country).subscribe(response => {
      this.co_response = response;
    });
  }
}
