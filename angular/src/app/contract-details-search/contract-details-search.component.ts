import { Component, OnInit } from '@angular/core';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';
import {CtrDetailsByHtNameResponseModel} from '../models/ctr-details-by-ht-name-response.model';

@Component({
  selector: 'app-contract-details-search',
  templateUrl: './contract-details-search.component.html',
  styleUrls: ['./contract-details-search.component.css']
})
export class ContractDetailsSearchComponent implements OnInit {

  contractDetailsList: CtrDetailsByHtNameResponseModel[];
  hotelName: string;

  constructor(private service: SunTravelsServicesService) { }

  ngOnInit() {
  }

  getContractDetailsByHotelName(): void {
    this.service.getContractDetailsByHotelNameService(this.hotelName).subscribe(ctrDList => {
      this.contractDetailsList = ctrDList;
    });
  }

}
