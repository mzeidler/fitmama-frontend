import { TestBed } from '@angular/core/testing';

import { UsersDetailsResolverService } from './users-details-resolver.service';

describe('UsersDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersDetailsResolverService = TestBed.get(UsersDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
