import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillerListComponent } from './biller-list.component';

describe('BillerListComponent', () => {
  let component: BillerListComponent;
  let fixture: ComponentFixture<BillerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
