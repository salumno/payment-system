import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { CustomerService } from "./shared/customer/customer.service";
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { BillerListComponent } from './biller-list/biller-list.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentService}  from "./shared/payment/payment.service";
import { BillerService } from "./shared/biller/biller.service";
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { BillerEditComponent } from './biller-edit/biller-edit.component';
import { NewPaymentComponent } from './new-payment/new-payment.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/payments', pathMatch: 'full'},
  {
    path: 'customers',
    component: CustomerListComponent
  },
  {
    path: 'customer-add',
    component: CustomerEditComponent
  },
  {
    path: 'customer-edit/:id',
    component: CustomerEditComponent
  },
  {
    path: 'biller-add',
    component: BillerEditComponent
  },
  {
    path: 'biller-edit/:id',
    component: BillerEditComponent
  },
  {
    path: 'billers',
    component: BillerListComponent
  },
  {
    path: 'payments',
    component: PaymentListComponent
  },
  {
    path: 'new-payment',
    component: NewPaymentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    BillerListComponent,
    PaymentListComponent,
    CustomerEditComponent,
    BillerEditComponent,
    NewPaymentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomerService, BillerService, PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
