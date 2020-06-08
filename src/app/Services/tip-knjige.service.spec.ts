import { TestBed } from '@angular/core/testing';

import { TipKnjigeService } from './tip-knjige.service';

describe('TipKnjigeService', () => {
  let service: TipKnjigeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipKnjigeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
