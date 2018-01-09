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

  requestValidity: boolean;
  message: string;

  contractID: number;
  hotelName: string;
  hotelPhoneNumber: number;

  constructor(private service: SunTravelsServicesService) {
    this.contract = new ContractModel(this.contractID, this.hotelName, this.hotelPhoneNumber);
  }

  ngOnInit() {
    this.c_response = new AddContractResponseModel(null, new InsertedContractInDbModel(null, null), null);
  }

  addContract(): void {
    if (this.contract.hotelName && this.contract.hotelPhoneNumber) {
      this.requestValidity = true;
      this.service.addContractService(this.contract).subscribe(response => {
        this.c_response = response;
      });
    } else {
      this.message = 'Please enter the missing information to proceed !';
      this.requestValidity = false;
    }
  }
}
