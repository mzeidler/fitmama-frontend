import { TestBed } from '@angular/core/testing';

import { TrainingsResolverService } from './trainings-resolver.service';

describe('TrainingsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingsResolverService = TestBed.get(TrainingsResolverService);
    expect(service).toBeTruthy();
  });
});
