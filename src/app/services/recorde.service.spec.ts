import { TestBed } from '@angular/core/testing';

import { RecordeService } from './recorde.service';

describe('RecordeService', () => {
  let service: RecordeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
