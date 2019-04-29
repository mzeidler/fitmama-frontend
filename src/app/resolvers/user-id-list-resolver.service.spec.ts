import { TestBed } from '@angular/core/testing';

import { UserIdListResolverService } from './user-id-list-resolver.service';

describe('UserIdListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserIdListResolverService = TestBed.get(UserIdListResolverService);
    expect(service).toBeTruthy();
  });
});
