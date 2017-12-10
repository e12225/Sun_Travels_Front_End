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
  alias: string;

  customer: CustomerModel;
  identity: string;

  constructor(private service: SunTravelsServicesService) {
  }

  ngOnInit() {
  }

  getCustomersByAlias(): void {
    this.service.getCustomersByNameOrAliasService(this.alias).subscribe(customerList => {
      this.customerList = customerList;
    });
  }

  getCustomerByIdentity(): void {
    this.service.getCustomerByIdentityService(this.identity).subscribe(customer => {
      this.customer = customer;
    });
  }
}
