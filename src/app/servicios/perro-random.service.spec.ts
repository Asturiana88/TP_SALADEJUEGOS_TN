import { TestBed } from '@angular/core/testing';

import { PerroRandomService } from './perro-random.service';

describe('PerroRandomService', () => {
  let service: PerroRandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerroRandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
