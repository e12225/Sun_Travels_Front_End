import {Component, OnInit} from '@angular/core';
import {CityModel} from '../models/city.model';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';

@Component({
  selector: 'app-cities-by-alias',
  templateUrl: './cities-by-alias.component.html',
  styleUrls: ['./cities-by-alias.component.css']
})
export class CitiesByAliasComponent implements OnInit {

  cityList: CityModel[];

  requestValidity: boolean;
  message: string;

  alias: string;

  constructor(private service: SunTravelsServicesService) {
  }

  ngOnInit() {
  }

  getCitiesByAlias(): void {
    if (this.alias) {
      this.requestValidity = true;
      this.service.getCitiesByAliasService(this.alias).subscribe(cityList => {
        this.cityList = cityList;
      });
    } else {
      this.message = 'Please enter a city name or an alias to proceed !';
      this.requestValidity = false;
    }
  }
}
