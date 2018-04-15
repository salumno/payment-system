import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BillerService} from "../shared/biller/biller.service";
import {Subscription} from "rxjs/Subscription";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-biller-edit',
  templateUrl: './biller-edit.component.html',
  styleUrls: ['./biller-edit.component.css']
})
export class BillerEditComponent implements OnInit, OnDestroy {

  biller: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private billerService: BillerService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.billerService.get(id).subscribe((biller: any) => {
          if (biller) {
            this.biller = biller;
            this.biller.isLoaded = true;
          } else {
            console.log(`Biller with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        })
      }
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/billers']);
  }

  saveForm(form: NgForm) {
    if (form['isLoaded']) {
      this.edit(form);
    } else {
      this.save(form);
    }
  }

  edit(form: NgForm) {
    this.billerService.update(form, this.biller.id).subscribe(
      () => this.gotoList(),
      error => console.error(error)
    );
  }

  save(form: NgForm) {
    this.billerService.save(form).subscribe(
      () => this.gotoList(),
      error => console.error(error)
    );
  }

  remove(id: string) {
    this.billerService.remove(id).subscribe(
      () => this.gotoList(),
      error => console.error(error)
    );
  }
}
