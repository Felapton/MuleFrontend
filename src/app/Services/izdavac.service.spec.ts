import { TestBed } from '@angular/core/testing';

import { IzdavacService } from './izdavac.service';

describe('IzdavacService', () => {
  let service: IzdavacService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IzdavacService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
