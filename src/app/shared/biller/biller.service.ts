import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BillerService {

  public BILLER_API = '//localhost:8080/api/billers';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.BILLER_API);
  }

  get(id: string) {
    return this.http.get(this.BILLER_API + "/" + id);
  }

  remove(id: string): Observable<any> {
    return this.http.delete(this.BILLER_API + "/" + id);
  }

  update(biller: any, id: string) {
    return this.http.put(this.BILLER_API + "/" + id, biller);
  }

  save(biller: any): Observable<Object> {
    return this.http.post(this.BILLER_API, biller);
  }

}
