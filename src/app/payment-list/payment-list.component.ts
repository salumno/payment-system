import { Component, OnInit } from '@angular/core';
import {PaymentService} from "../shared/payment/payment.service";

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  payments: Array<any>;
  customers: Array<any>;
  billers: Array<any>;

  billerIdFilter: number = 0;
  customerIdFilter: number = 0;

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
    this.paymentService.getAll().subscribe(
      payments => this.payments = payments
    );
    this.paymentService.getCustomersAndBillers().subscribe(data => {
      this.customers = data[0];
      this.billers = data[1];
    });
  }

  updatePaymentsList() {
    let filter = {
      billerId: this.billerIdFilter,
      customerId: this.customerIdFilter
    };
    this.paymentService.getPaymentsByFilter(filter).subscribe(payments => this.payments = payments);
  }

  isPaymentAddingSuccessful() {
    return this.paymentService.isAddingSuccess == 1;
  }

  isPaymentAddingFailed() {
    return this.paymentService.isAddingSuccess == -1;
  }

  closeSuccessMessage() {
    this.paymentService.isAddingSuccess = 0;
  }
}
