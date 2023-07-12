import { TestBed } from '@angular/core/testing';

import { ImageShowCentreService } from './image-show-centre.service';

describe('ImageShowCentreService', () => {
  let service: ImageShowCentreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageShowCentreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
