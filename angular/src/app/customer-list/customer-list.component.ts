import {Component, OnInit} from '@angular/core';
import {CustomerModel} from '../models/customer.model';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: CustomerModel[];

  constructor(private service: SunTravelsServicesService) {
  }

  ngOnInit() {
    this.getCustomerList();
  }

  getCustomerList(): void {
    this.service.getCustomerListService().subscribe(customerList => {
      this.customerList = customerList;
    });
  }
}
