import { TestBed, inject } from '@angular/core/testing';

import { OMDbService } from './omdb.service';

describe('OMDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OMDbService]
    });
  });

  it('should be created', inject([OMDbService], (service: OMDbService) => {
    expect(service).toBeTruthy();
  }));
});
