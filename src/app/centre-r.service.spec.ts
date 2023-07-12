import { TestBed } from '@angular/core/testing';

import { CentreRService } from './centre-r.service';

describe('CentreRService', () => {
  let service: CentreRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentreRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
