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
  alias: string;

  constructor(private service: SunTravelsServicesService) {
  }

  ngOnInit() {
  }

  getCitiesByAlias(): void {
    this.service.getCitiesByAliasService(this.alias).subscribe(cityList => {
      this.cityList = cityList;
    });
  }
}
