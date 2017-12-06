import {Component, OnInit} from '@angular/core';
import {AddContractDetailsResponseModel} from '../models/add-contract-details-response.model';
import {ContractDetailsModel} from '../models/contract-details.model';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';
import {InsertedContractDetailsInDbModel} from '../models/inserted-contract-details-in-db.model';

@Component({
  selector: 'app-add-contract-details',
  templateUrl: './add-contract-details.component.html',
  styleUrls: ['./add-contract-details.component.css']
})
export class AddContractDetailsComponent implements OnInit {

  cd_response: AddContractDetailsResponseModel;
  contractDetails: ContractDetailsModel;

  contractDetailsID: number;
  contractID: number;
  validFrom: Date;
  validTo: Date;
  roomType: string;
  numberOfRooms: number;
  maxAdults: number;
  price: number;

  constructor(private service: SunTravelsServicesService) {
    this.contractDetails = new ContractDetailsModel(this.contractDetailsID, this.contractID, this.validFrom,
      this.validTo, this.roomType, this.numberOfRooms,
      this.maxAdults, this.price);
  }

  ngOnInit() {
    this.cd_response = new AddContractDetailsResponseModel(null, new InsertedContractDetailsInDbModel(null, null, null, null, null, null, null, null), null);
  }

  addContractDetails(): void {
    this.service.addContractDetailsService(this.contractDetails).subscribe(response => {
      this.cd_response = response;
    });
  }
}
