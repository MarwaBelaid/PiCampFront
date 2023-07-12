import { TestBed } from '@angular/core/testing';

import { CentreCampServiceService } from './centre-camp-service.service';

describe('CentreCampServiceService', () => {
  let service: CentreCampServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentreCampServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
