import {Component, OnInit} from '@angular/core';
import {AddCustomerResponseModel} from '../models/add-customer-response.model';
import {CustomerModel} from '../models/customer.model';
import {SunTravelsServicesService} from '../services/sun-travels-services.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  cu_response: AddCustomerResponseModel;
  customer: CustomerModel;

  requestValidity: boolean;
  message: string;

  customerID: number;
  firstName: string;
  lastName: string;
  customerPhoneNumber: number;
  countryName: string;
  cityName: string;
  ssnOrNic: number;

  constructor(private service: SunTravelsServicesService) {
    this.customer = new CustomerModel(this.customerID, this.firstName, this.lastName, this.customerPhoneNumber, this.countryName, this.cityName, this.ssnOrNic);
  }

  ngOnInit() {
    this.cu_response = new AddCustomerResponseModel(null, new CustomerModel(null, null, null, null, null, null, null), null);
  }

  addCustomer(): void {
    if (this.customer.customerFirstName && this.customer.customerLastName && this.customer.customerPhoneNumber && this.customer.countryName && this.customer.cityName && this.customer.ssnOrNic) {
      this.requestValidity = true;
      this.service.addCustomerService(this.customer).subscribe(response => {
        this.cu_response = response;
        this.message = response.message;
        alert(this.message);
      });
    } else {
      this.message = 'Please enter the missing information to proceed !';
      this.requestValidity = false;
      alert(this.message);
    }
  }
}
