import {Component, OnInit} from '@angular/core';
import {ContractDetailsModel} from '../models/contract-details.model';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';

@Component({
  selector: 'app-contract-details-list',
  templateUrl: './contract-details-list.component.html',
  styleUrls: ['./contract-details-list.component.css']
})
export class ContractDetailsListComponent implements OnInit {

  contractDetailsList: ContractDetailsModel[];

  constructor(private service: SunTravelsServicesService) {
  }

  ngOnInit() {
    this.getContractDetailsList();
  }

  getContractDetailsList(): void {
    this.service.getContractDetailsListService().subscribe(ctrDList => {
      this.contractDetailsList = ctrDList;
    });
  }
}
