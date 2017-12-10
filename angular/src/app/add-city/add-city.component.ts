import {Component, OnInit} from '@angular/core';
import {AddCityResponseModel} from '../models/add-city-response.model';
import {CityModel} from '../models/city.model';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  ci_response: AddCityResponseModel;
  city: CityModel;

  cityID: number;
  countryName: string;
  cityName: string;

  constructor(private service: SunTravelsServicesService) {
    this.city = new CityModel(this.cityID, this.cityName, this.countryName);
  }

  ngOnInit() {
    this.ci_response = new AddCityResponseModel(null, new CityModel(null, null, null), null);
  }

  addCity(): void {
    this.service.addCityService(this.city).subscribe(response => {
      this.ci_response = response;
    });
  }
}
