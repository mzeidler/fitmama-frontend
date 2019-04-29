import { TestBed } from '@angular/core/testing';

import { MenuIdListResolverService } from './menu-id-list-resolver.service';

describe('MenuIdListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuIdListResolverService = TestBed.get(MenuIdListResolverService);
    expect(service).toBeTruthy();
  });
});
