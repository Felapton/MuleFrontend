import { TestBed } from '@angular/core/testing';

import { ClanskaKartaService } from './clanska-karta.service';

describe('ClanskaKartaService', () => {
  let service: ClanskaKartaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClanskaKartaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
