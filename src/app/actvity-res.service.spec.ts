import { TestBed } from '@angular/core/testing';

import { ActvityResService } from './actvity-res.service';

describe('ActvityResService', () => {
  let service: ActvityResService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActvityResService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
