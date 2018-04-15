import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CustomerService {

  public CUSTOMER_API = '//localhost:8080/api/customers';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.CUSTOMER_API);
  }

  get(id: string) {
    return this.http.get(this.CUSTOMER_API + "/" + id);
  }

  remove(id: string): Observable<any> {
    return this.http.delete(this.CUSTOMER_API + "/" + id);
  }

  save(customer: any) {
    return this.http.post(this.CUSTOMER_API, customer);
  }

  update(customer: any, id: string) {
    return this.http.put(this.CUSTOMER_API + "/" + id, customer);
  }
}
