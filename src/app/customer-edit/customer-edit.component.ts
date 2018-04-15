import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../shared/customer/customer.service";
import {Subscription} from "rxjs/Subscription";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit, OnDestroy {
  customer: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.customerService.get(id).subscribe((customer: any) => {
          if (customer) {
            this.customer = customer;
            this.customer.isLoaded = true;
          } else {
            console.log(`Customer with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  saveForm(form: NgForm) {
    if (form['isLoaded']) {
      this.edit(form);
    } else {
      this.save(form);
    }
  }

  save(form: NgForm) {
    this.customerService.save(form).subscribe(
      () => this.gotoList(),
      error => console.error(error)
    );
  }

  edit(form: NgForm) {
    this.customerService.update(form, this.customer.id).subscribe(
      () => this.gotoList(),
      error => console.error(error)
    );
  }

  remove(id: string) {
    this.customerService.remove(id).subscribe(
      () => this.gotoList(),
      error => console.error(error)
    );
  }

  gotoList() {
    this.router.navigate(['/customers']);
  }
}
