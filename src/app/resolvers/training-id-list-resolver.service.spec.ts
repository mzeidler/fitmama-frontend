import { TestBed } from '@angular/core/testing';

import { TrainingIdListResolverService } from './training-id-list-resolver.service';

describe('TrainingIdListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingIdListResolverService = TestBed.get(TrainingIdListResolverService);
    expect(service).toBeTruthy();
  });
});
