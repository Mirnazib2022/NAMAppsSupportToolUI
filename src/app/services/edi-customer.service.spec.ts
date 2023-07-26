import { TestBed } from '@angular/core/testing';

import { EdiCustomerService } from './edi-customer.service';

describe('EdiCustomerService', () => {
  let service: EdiCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdiCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
