import {Component, OnInit} from '@angular/core';
import {CustomerModel} from '../models/customer.model';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';

@Component({
  selector: 'app-customers-by-alias',
  templateUrl: './customers-search.component.html',
  styleUrls: ['./customers-search.component.css']
})
export class CustomersSearchComponent implements OnInit {

  customerList: CustomerModel[];

  request_1_Validity: boolean;
  request_2_Validity: boolean;

  message_1: string;
  message_2: string;

  alias: string;
  identity: string;

  customer: CustomerModel;

  constructor(private service: SunTravelsServicesService) {
  }

  ngOnInit() {
  }

  getCustomersByAlias(): void {
    if (this.alias) {
      this.request_1_Validity = true;
      this.service.getCustomersByNameOrAliasService(this.alias).subscribe(customerList => {

        if(customerList.length == 0){
          this.message_1 = 'No matching customers exist for the given name or alias';
          alert(this.message_1);
        }
        this.customerList = customerList;
      });
    } else {
      this.message_1 = 'Please enter a customer name or an alias to proceed !';
      this.request_1_Validity = false;
      alert(this.message_1);
    }
  }

  getCustomerByIdentity(): void {
    if (this.identity) {
      this.request_2_Validity = true;
      this.service.getCustomerByIdentityService(this.identity).subscribe(customer => {

        if(!customer){
          this.message_2 = 'No matching customer exists for the given identity';
          alert(this.message_2);
        }
        this.customer = customer;
      });
    }else {
      this.message_2 = 'Please enter a customer identity to proceed !';
      this.request_2_Validity = false;
      alert(this.message_2);
    }
  }
}
