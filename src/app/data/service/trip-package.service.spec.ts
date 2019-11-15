import { TestBed } from '@angular/core/testing';

import { TripPackageService } from './trip-package.service';

describe('TripPackageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripPackageService = TestBed.get(TripPackageService);
    expect(service).toBeTruthy();
  });
});
