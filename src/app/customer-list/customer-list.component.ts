import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../shared/customer/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Array<any>;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getAll().subscribe(
      customers => this.customers = customers
    );
  }

  removeCustomer(id: string) {
    this.customerService.remove(id).subscribe(
      customers => this.customers = customers,
      error => console.error(error)
    );
  }

}
