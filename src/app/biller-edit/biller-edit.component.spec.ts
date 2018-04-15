import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillerEditComponent } from './biller-edit.component';

describe('BillerEditComponent', () => {
  let component: BillerEditComponent;
  let fixture: ComponentFixture<BillerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
