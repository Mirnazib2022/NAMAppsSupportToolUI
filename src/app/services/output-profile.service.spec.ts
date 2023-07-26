import { TestBed } from '@angular/core/testing';

import { OutputProfileService } from './output-profile.service';

describe('OutputProfileService', () => {
  let service: OutputProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutputProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
