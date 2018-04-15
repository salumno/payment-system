import { Component, OnInit } from '@angular/core';
import {BillerService} from "../shared/biller/biller.service";

@Component({
  selector: 'app-biller-list',
  templateUrl: './biller-list.component.html',
  styleUrls: ['./biller-list.component.css']
})
export class BillerListComponent implements OnInit {

  billers: Array<any>;

  constructor(private billerService: BillerService) { }

  ngOnInit() {
    this.billerService.getAll().subscribe(
      billers => this.billers = billers
    );
  }

  removeBiller(id: string) {
    this.billerService.remove(id).subscribe(
      billers => this.billers = billers,
      error => console.error(error)
    );
  }

}
