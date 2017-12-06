import {Component, OnInit} from '@angular/core';
import {ContractModel} from '../models/contract.model';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  contractList: ContractModel[];

  constructor(private service: SunTravelsServicesService) {
  }

  ngOnInit() {
    this.getContractList();
  }

  getContractList(): void {
    this.service.getContractListService().subscribe(contractList => {
      this.contractList = contractList;
    });
  }
}
