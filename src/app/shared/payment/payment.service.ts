import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {BillerService} from "../biller/biller.service";
import {CustomerService} from "../customer/customer.service";
import {forkJoin} from "rxjs/observable/forkJoin";

@Injectable()
export class PaymentService {

  public PAYMENT_API = '//localhost:8080/api/payments';
  public isAddingSuccess: number = 0;

  constructor(private http: HttpClient,
              private billerService: BillerService,
              private customerService: CustomerService) { }

  getAll(): Observable<any> {
    return this.http.get(this.PAYMENT_API);
  }

  save(payment: any) {
    return this.http.post(this.PAYMENT_API, payment);
  }

  getCustomersAndBillers() {
    return forkJoin(
      this.customerService.getAll(),
      this.billerService.getAll()
    );
  }

  getPaymentsByFilter(filter: any): Observable<any>{
    return this.http.post(this.PAYMENT_API + "/filter", filter)
  }
}
