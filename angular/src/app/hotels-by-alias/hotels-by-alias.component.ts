import {Component, OnInit} from '@angular/core';
import {HotelModel} from '../models/hotel.model';

@Component({
  selector: 'app-hotels-by-alias',
  templateUrl: './hotels-by-alias.component.html',
  styleUrls: ['./hotels-by-alias.component.css']
})
export class HotelsByAliasComponent implements OnInit {

  hList: HotelModel[];

  constructor() {
  }

  ngOnInit() {
  }

}
