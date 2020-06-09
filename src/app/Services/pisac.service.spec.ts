import { TestBed } from '@angular/core/testing';

import { PisacService } from './pisac.service';

describe('PisacService', () => {
  let service: PisacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PisacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
