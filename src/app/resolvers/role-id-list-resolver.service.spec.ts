import { TestBed } from '@angular/core/testing';

import { RoleIdListResolverService } from './role-id-list-resolver.service';

describe('RoleIdListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleIdListResolverService = TestBed.get(RoleIdListResolverService);
    expect(service).toBeTruthy();
  });
});
