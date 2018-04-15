import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PaymentService} from "../shared/payment/payment.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.css']
})
export class NewPaymentComponent implements OnInit {

  payment: any = {};
  customers: Array<any>;
  billers: Array<any>;

  constructor(private router: Router, private paymentService: PaymentService) { }

  ngOnInit() {
    this.paymentService.getCustomersAndBillers().subscribe(data => {
      this.customers = data[0];
      this.billers = data[1];
    });
  }

  savePaymentForm(form: NgForm) {
    this.paymentService.save(form).subscribe(
      () => this.successfulPaymentAdding(),
      error => this.failedPaymentAdding(error)
    )
  }

  goToList() {
    this.router.navigate(['/payments']);
  }

  private successfulPaymentAdding() {
    this.paymentService.isAddingSuccess = 1;
    this.goToList();
  }

  private failedPaymentAdding(error: any) {
    console.error(error);
    this.paymentService.isAddingSuccess = -1;
    this.goToList();
  }
}
