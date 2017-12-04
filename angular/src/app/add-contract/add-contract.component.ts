import {Component, OnInit} from '@angular/core';
import {ContractModel} from '../models/contract.model';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';
import {InsertedContractInDbModel} from '../models/inserted-contract-in-db.model';
import {AddContractResponseModel} from '../models/add-contract-response.model';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {

  c_response: AddContractResponseModel;
  contract: ContractModel;

  contractID: number;
  hotelName: string;

  constructor(private service: SunTravelsServicesService) {
    this.contract = new ContractModel(this.contractID, this.hotelName);
  }

  ngOnInit() {
    this.c_response = new AddContractResponseModel(null, new InsertedContractInDbModel(null, null), null);
  }

  addContract(): void {
    this.service.addContractService(this.contract).subscribe(response => {
      this.c_response = response;
    });
  }
}
