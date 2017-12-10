import { Component, OnInit } from '@angular/core';
import {CityModel} from '../models/city.model';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  cityList: CityModel[];

  constructor(private service: SunTravelsServicesService) { }

  ngOnInit() {
    this.getCityList();
  }

  getCityList(): void {
    this.service.getCityListService().subscribe(cityList => {
      this.cityList = cityList;
    });
  }
}
