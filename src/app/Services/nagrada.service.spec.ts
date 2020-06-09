import { TestBed } from '@angular/core/testing';

import { NagradaService } from './nagrada.service';

describe('NagradaService', () => {
  let service: NagradaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NagradaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
