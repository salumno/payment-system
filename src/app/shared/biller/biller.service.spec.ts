import { TestBed, inject } from '@angular/core/testing';

import { BillerService } from './biller.service';

describe('BillerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillerService]
    });
  });

  it('should be created', inject([BillerService], (service: BillerService) => {
    expect(service).toBeTruthy();
  }));
});
